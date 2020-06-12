<?php

// autoload_static.php @generated by Composer

namespace AdvancedAds\Autoload;

class ComposerStaticInit_advanced_ads
{
    public static $classMap = array (
        'ADVADS_SL_Plugin_Updater' => __DIR__ . '/../..' . '/classes/EDD_SL_Plugin_Updater.php',
        'Advads_Ad' => __DIR__ . '/../..' . '/classes/ad.php',
        'Advanced_Ads' => __DIR__ . '/../..' . '/public/class-advanced-ads.php',
        'Advanced_Ads_Ad' => __DIR__ . '/../..' . '/classes/ad.php',
        'Advanced_Ads_Ad_Ajax_Callbacks' => __DIR__ . '/../..' . '/classes/ad_ajax_callbacks.php',
        'Advanced_Ads_Ad_Debug' => __DIR__ . '/../..' . '/classes/ad-debug.php',
        'Advanced_Ads_Ad_Health_Notices' => __DIR__ . '/../..' . '/classes/ad-health-notices.php',
        'Advanced_Ads_Ad_List_Filters' => __DIR__ . '/../..' . '/admin/includes/class-list-filters.php',
        'Advanced_Ads_Ad_Network' => __DIR__ . '/../..' . '/admin/includes/class-ad-network.php',
        'Advanced_Ads_Ad_Network_Ad_Importer' => __DIR__ . '/../..' . '/admin/includes/class-ad-network-ad-importer.php',
        'Advanced_Ads_Ad_Network_Ad_Unit' => __DIR__ . '/../..' . '/admin/includes/class-ad-network-ad-unit.php',
        'Advanced_Ads_Ad_Type_Abstract' => __DIR__ . '/../..' . '/classes/ad_type_abstract.php',
        'Advanced_Ads_Ad_Type_Content' => __DIR__ . '/../..' . '/classes/ad_type_content.php',
        'Advanced_Ads_Ad_Type_Dummy' => __DIR__ . '/../..' . '/classes/ad_type_dummy.php',
        'Advanced_Ads_Ad_Type_Group' => __DIR__ . '/../..' . '/classes/ad_type_group.php',
        'Advanced_Ads_Ad_Type_Image' => __DIR__ . '/../..' . '/classes/ad_type_image.php',
        'Advanced_Ads_Ad_Type_Plain' => __DIR__ . '/../..' . '/classes/ad_type_plain.php',
        'Advanced_Ads_Admin' => __DIR__ . '/../..' . '/admin/class-advanced-ads-admin.php',
        'Advanced_Ads_Admin_Ad_Type' => __DIR__ . '/../..' . '/admin/includes/class-ad-type.php',
        'Advanced_Ads_Admin_Licenses' => __DIR__ . '/../..' . '/admin/includes/class-licenses.php',
        'Advanced_Ads_Admin_Menu' => __DIR__ . '/../..' . '/admin/includes/class-menu.php',
        'Advanced_Ads_Admin_Meta_Boxes' => __DIR__ . '/../..' . '/admin/includes/class-meta-box.php',
        'Advanced_Ads_Admin_Notices' => __DIR__ . '/../..' . '/admin/includes/class-notices.php',
        'Advanced_Ads_Admin_Options' => __DIR__ . '/../..' . '/admin/includes/class-options.php',
        'Advanced_Ads_Admin_Settings' => __DIR__ . '/../..' . '/admin/includes/class-settings.php',
        'Advanced_Ads_Admin_Upgrades' => __DIR__ . '/../..' . '/admin/includes/class-admin-upgrades.php',
        'Advanced_Ads_Ajax' => __DIR__ . '/../..' . '/classes/ad-ajax.php',
        'Advanced_Ads_Checks' => __DIR__ . '/../..' . '/classes/checks.php',
        'Advanced_Ads_Compatibility' => __DIR__ . '/../..' . '/classes/compatibility.php',
        'Advanced_Ads_Display_Conditions' => __DIR__ . '/../..' . '/classes/display-conditions.php',
        'Advanced_Ads_Filesystem' => __DIR__ . '/../..' . '/classes/filesystem.php',
        'Advanced_Ads_Frontend_Checks' => __DIR__ . '/../..' . '/classes/frontend_checks.php',
        'Advanced_Ads_Frontend_Notices' => __DIR__ . '/../..' . '/classes/frontend-notices.php',
        'Advanced_Ads_Group' => __DIR__ . '/../..' . '/classes/ad_group.php',
        'Advanced_Ads_Groups_List' => __DIR__ . '/../..' . '/admin/includes/class-ad-groups-list.php',
        'Advanced_Ads_Model' => __DIR__ . '/../..' . '/classes/ad-model.php',
        'Advanced_Ads_Overview_Widgets_Callbacks' => __DIR__ . '/../..' . '/admin/includes/class-overview-widgets.php',
        'Advanced_Ads_Placements' => __DIR__ . '/../..' . '/classes/ad_placements.php',
        'Advanced_Ads_Plugin' => __DIR__ . '/../..' . '/classes/plugin.php',
        'Advanced_Ads_Select' => __DIR__ . '/../..' . '/classes/ad-select.php',
        'Advanced_Ads_Shortcode_Creator' => __DIR__ . '/../..' . '/admin/includes/class-shortcode-creator.php',
        'Advanced_Ads_Upgrades' => __DIR__ . '/../..' . '/classes/upgrades.php',
        'Advanced_Ads_Utils' => __DIR__ . '/../..' . '/classes/utils.php',
        'Advanced_Ads_Visitor_Conditions' => __DIR__ . '/../..' . '/classes/visitor-conditions.php',
        'Advanced_Ads_Widget' => __DIR__ . '/../..' . '/classes/widget.php',
        'Yoast_I18n_WordPressOrg_v3' => __DIR__ . '/..' . '/yoast/i18n-module/src/i18n-wordpressorg-v3.php',
        'Yoast_I18n_v3' => __DIR__ . '/..' . '/yoast/i18n-module/src/i18n-v3.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit_advanced_ads::$classMap;

        }, null, ClassLoader::class);
    }
}
