(function ($) {
	"use strict";
	function AdminPageElementor() {
		this.$obj = this;
		this.filterId = null;
		this.filterTitle = '';
		this.newFilters = [];
		this.filtersSettings = typeof filtersSettings !== 'undefined' ? filtersSettings : [];
		this.WpfAdminPage = window.wpfAdminPage;
		return this.$obj;
	}
	
	AdminPageElementor.prototype.init = (function () {
		var _thisObj = this;
		elementor.hooks.addAction( 'panel/open_editor/widget/woofilters', function( panel, model, view ) {
			_thisObj.startEvents();
			
			$('#elementor-panel').on( 'click', '[data-event="createFilter"]', function() {
				var filterTitle = $('#elementor-panel').find('[data-setting="filter_name"]').val();
				_thisObj.saveElementorNewFilter(filterTitle);
			} );
			
			$('#elementor-panel').on( 'click', '[data-event="saveFilter"]', function() {
				var filterId = _thisObj.filterId;
				_thisObj.filtersSettings[filterId].settings = JSON.parse($('input[name="settings"]').val());
				setTimeout(function(){
					_thisObj.WpfAdminPage.saveFilters();
					_thisObj.saveElementorFilter(filterId);
				},500);
			} );
			
			$('#elementor-panel').on( 'click', '#wpfAddFilterButton', function() {
				if (!_thisObj.filterId || _thisObj.filterId === 'new' || typeof _thisObj.filtersSettings[_thisObj.filterId] === 'undefined') {
					_thisObj.showMessage();
					return true;
				}
				
				setTimeout(function(){
					_thisObj.WpfAdminPage.saveFilters();
				},500);
			} );
		} );
	});
	
	AdminPageElementor.prototype.startEvents = (function () {
		
		if (typeof elementorFrontend !== 'undefined') {
			elementorFrontend.hooks.addAction('frontend/element_ready/woofilters.default', function ($scope) {
				hideFilterLoader($scope.find('.wpfMainWrapper'));
			});
			elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
				if ( $scope.find('.wpfMainWrapper').length ){
					hideFilterLoader($scope.find('.wpfMainWrapper'));
				}
			} );
		}
		$('[data-event="saveFilter"]').show();
		this.events();
	});
	
	AdminPageElementor.prototype.events = (function () {
		var _thisObj = this;
		
		if (typeof(window.wpfAdminPagePro) == 'function') {
			window.wpfAdminPagePro();
		}
		this.WpfAdminPage.init();
		
		if ($('[data-setting="filter_id"]').length) {
			$('[data-setting="filter_id"]').off('change').on('change', function (e) {
				var filterId = $(this).val();
				
				_thisObj.filterId = filterId;
				if ('0' !== filterId && 'new' !== filterId) {
					_thisObj.filterTitle = $('[data-setting="filter_id"]').find('option[value="' + filterId + '"]').text();
				}
			}).trigger('change');
		}
		
		$('#elementor-panel-saver-button-publish,.elementor-update-preview-button').off('click.wpf').on('click.wpf', function() {
			var filterId = _thisObj.filterId;
			setTimeout(function(){
				_thisObj.WpfAdminPage.saveFilters();
				_thisObj.saveElementorFilter(filterId);
			},500);
		} );
		
		$('.elementor-control-type-section').off('click.wpf').on('click.wpf', function() {
			
			if (!$(this).hasClass('elementor-control-section_filters')) {
				/* restart events */
				_thisObj.startEvents();
			}
			
			if ($(this).hasClass('elementor-control-section_content')) {
				_thisObj.loadNewFilters();
			}
		});
		
		$('.elementor-control-section_filters').off('click.wpf').on('click.wpf', function() {
			if (!_thisObj.filterId || _thisObj.filterId === 'new' || typeof _thisObj.filtersSettings[_thisObj.filterId] === 'undefined') {
				_thisObj.showMessage();
				return true;
			}
			
			$('#containerWrapperElementor').append('<div class="wpfLoading"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>');
			
			var currentSettings = _thisObj.filtersSettings[_thisObj.filterId].settings,
				filters = currentSettings.filters.order ? JSON.parse(currentSettings.filters.order) : [];
			
			jQuery('.wpfFiltersBlock').html('');
			
			filters.forEach(function (value) {
				var settings = value.settings;
				if (typeof settings == 'undefined' || !settings['f_enable']) {
					return true;
				}
				
				_thisObj.WpfAdminPage.wpfAddFilter(value.id, settings);
			});
			
			$('input[name="settings"]').val(JSON.stringify(_thisObj.filtersSettings[_thisObj.filterId].settings));
			$('input[name="title"]').val(_thisObj.filterTitle);
			$('input[name="id"]').val(_thisObj.filterId);
			
			setTimeout(function(){
				/* restart events */
				_thisObj.startEvents();
				_thisObj.WpfAdminPage.saveFilters();
				$('#containerWrapperElementor').find('.wpfLoading').remove();
			},1000);
		});
		
		$('.elementor-component-tab').off('click.wpf').on('click.wpf', function() {
			
			if ($(this).data('tab') === 'content') {
				_thisObj.loadNewFilters();
			}
			
			if (!_thisObj.filterId || _thisObj.filterId === 'new' || typeof _thisObj.filtersSettings[_thisObj.filterId] === 'undefined') {
				_thisObj.showMessage();
				return true;
			}
			var currentSettings = _thisObj.filtersSettings[_thisObj.filterId].settings,
				filters = currentSettings.filters.order ? currentSettings.filters.order : '',
				preselect = currentSettings.filters.preselect ? currentSettings.filters.preselect : '';
			
			if ($(this).hasClass('elementor-tab-control-style') || $(this).hasClass('elementor-tab-control-advanced')) {
				$('#wpfFiltersEditForm .row-tab').addClass('active');
				$('.sub-tab-content:first').addClass('active');
				
				_thisObj.setCurrentSettings();
			}
			
			/* restart events */
			_thisObj.startEvents();
			
			$('input[name="settings[filters][order]"]').val(filters);
			$('input[name="settings[filters][preselect]"]').val(preselect);
			$('input[name="settings"]').val(JSON.stringify(currentSettings));
			$('input[name="title"]').val(_thisObj.filterTitle);
			$('input[name="id"]').val(_thisObj.filterId);
		});
		
		$('input[name="settings"]').off('input').on('input', function(){
			_thisObj.filtersSettings[_thisObj.filterId].settings = JSON.parse($(this).val());
			_thisObj.saveElementorFilter(_thisObj.filterId);
		});
		
		$('input[name="settings[filters][order]"]').off('input').on('input', function(){
			if (!_thisObj.filtersSettings[_thisObj.filterId].settings.filters.order) {
				_thisObj.filtersSettings[_thisObj.filterId].settings.filters.order = '';
			}
			_thisObj.filtersSettings[_thisObj.filterId].settings.filters.order = $(this).val();
		});
		
		$('.containerWrapperElementor').off('change wpf-change', 'input,select,textarea').on('change wpf-change', 'input,select,textarea', function(){
			var currentSettings = _thisObj.filtersSettings[_thisObj.filterId].settings,
				optionName = $(this).attr('name').replace('settings[','').replace(']',''),
				optionName = optionName.indexOf(']]') > -1 ? optionName.replace('settings[','').replace(']]',']') : optionName.replace('settings[','').replace(']',''),
				$elm = $(this),
				value = $elm.val(),
				elm = $elm.get(0);
			
			if (elm.type === 'checkbox') {
				currentSettings[optionName] = elm.checked;
			} else if (elm.type === 'select-multiple') {
				if ( _thisObj.WpfAdminPage.$multiSelectFields.includes(elm.name) ) {
					//add more filter for this type
					var arrayValues = $elm.getSelectionOrder();
					if (arrayValues) {
						currentSettings[optionName] = arrayValues.toString();
					}
				}
			} else if (value !== '') {
				currentSettings[optionName] = $elm.val();
			}
			
			$('input[name="settings"]').val( JSON.stringify(_thisObj.filtersSettings[_thisObj.filterId].settings) );
		});
	});
	
	AdminPageElementor.prototype.saveElementorNewFilter = (function ( filterTitle, duplicateId ) {
		var _thisObj = this;
		jQuery.sendFormWpf({
			data: {
				mod: 'woofilters',
				action: 'save',
				title: filterTitle,
				duplicateId: typeof duplicateId !== 'undefined' ? duplicateId : ''
			},
			onSuccess: function(res) {
				if (!res.error) {
					_thisObj.filtersSettings[res.data.filter.id] = res.data.filterSettings;
					$('#elementor-panel').find('[data-setting="filter_name"]').val('').trigger('input');
					$('#elementor-panel').find('[data-setting="filter_id"]')
						.append('<option value="' + res.data.filter.id + '">' + res.data.filter.title + '</option>')
						.val(res.data.filter.id).trigger('change');
					_thisObj.newFilters.push(res.data.filter);
				} else {
					$('#elementor-panel').find('[data-setting="filter_name"]').val(res.errors.title).trigger('change');
				}
			}
		});
	});
	
	AdminPageElementor.prototype.setCurrentSettings = (function () {
		var _thisObj = this,
			settings = _thisObj.filtersSettings[_thisObj.filterId].settings;
		
		$('#elementor-panel').find('input:not([type="hidden"]), select, textarea').map(function (index, elm) {
			var name = elm.name,
				name = name.indexOf(']]') > -1 ? name.replace('settings[','').replace(']]',']') : name.replace('settings[','').replace(']',''),
				$elm = jQuery(elm);
			
			if (elm.type === 'checkbox') {
				if (typeof settings[name] === 'undefined') {
					settings[name] = '';
				}
				if (settings[name] == '0' || settings[name] == false) {
					settings[name] = 0;
				}
				$elm.prop("checked", settings[name]);
			} else if (elm.type === 'select-multiple') {
				if (_thisObj.WpfAdminPage.$multiSelectFields.includes(elm.name)) {
					if (settings[name]) {
						var selectedArr = settings[name].split(',');
						jQuery.each(selectedArr, function (i, e) {
							var option = $elm.find("option[value='" + e + "']");
							option.remove();
							$elm.append(option);
							$elm.find("option[value='" + e + "']").prop("selected", true);
						});
					}
				}
			} else {
				if (typeof settings[name] !== 'undefined') {
					elm.value = settings[name];
				}
				if ($elm.hasClass('woobewoo-color-result-text')) {
					$elm.closest('.woobewoo-color-picker').find('.woobewoo-color-result').val(elm.value);
				}
			}
		});
	});
	
	AdminPageElementor.prototype.saveElementorFilter = (function ( filterId ) {
		var _thisObj = this;
		if (typeof _thisObj.filtersSettings[filterId] === 'undefined') {
			return;
		}
		
		var settings = _thisObj.filtersSettings[filterId].settings;
		
		if ( $('input[name="settings"]').length ) {
			$('input[name="settings"]').val(JSON.stringify(settings));
			$('#wpfFiltersEditForm').submit();
			
			setTimeout(function(){
				$('#elementor-panel').find('input[data-setting="filter_trigger"],input[data-setting="filter_options_trigger"],input[data-setting="filter_design_trigger"]').val(filterId).trigger('input');
				_thisObj.filtersSettings[filterId].settings.filters.order = $('input[name="settings[filters][order]"]').val();
			}, 500);
		}
	});
	
	AdminPageElementor.prototype.showMessage = (function () {
		if ( $('#elementor-panel').find('.wpfMessage').length ) {
			$('#elementor-panel').find('.wpfMessage').remove();
		}
		
		$('[data-event="saveFilter"]').hide();
		$('#elementor-panel').append('<div class="wpfMessage"><span>You need to select some WooFilter or create new!</span></div>');
		$('#elementor-panel').find('.wpfMessage').fadeOut(4000);
	});
	
	AdminPageElementor.prototype.loadNewFilters = (function () {
		var _thisObj = this;
		if ( _thisObj.newFilters.length ) {
			var newFiltersLen = _thisObj.newFilters.length;
			for (var fNum = 0; fNum < newFiltersLen; fNum++) {
				if ( !$('[data-setting="filter_id"]').find('option[value="'+_thisObj.newFilters[fNum].id+'"]').length ) {
					$('[data-setting="filter_id"]')
						.append('<option value="' + _thisObj.newFilters[fNum].id + '">' + _thisObj.newFilters[fNum].title + '</option>');
				}
				if (_thisObj.filterId == _thisObj.newFilters[fNum].id) {
					$('[data-setting="filter_id"]').val(_thisObj.newFilters[fNum].id).trigger('change');
				}
			}
		}
	});
	
	$(document).ready(function () {
		window.wpfAdminPageElementor = new AdminPageElementor();
		window.wpfAdminPageElementor.init();
	});
}(window.jQuery));
