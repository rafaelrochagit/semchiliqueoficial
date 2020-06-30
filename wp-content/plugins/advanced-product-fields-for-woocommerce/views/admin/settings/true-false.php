<?php
/* @var $model array */
$pro = isset($model['pro']) && $model['pro'] === true;
?>

<div class="wapf-field__setting" data-pro="<?php echo $pro ? 'true':'false'; ?>" data-setting="<?php echo $model['id']; ?>">
    <div class="wapf-setting__label">
        <label><?php _e($model['label'],'sw-wapf');?> <?php if($pro) _e('(Pro only)','sw-wapf'); ?></label>
        <?php if(isset($model['description'])) { ?>
            <p class="wapf-description">
                <?php _e($model['description'],'sw-wapf');?>
            </p>
        <?php } ?>
    </div>
    <div class="wapf-setting__input">
        <div class="wapf-toggle" rv-unique-checkbox>
            <input <?php echo $pro ? 'disabled':'';?> rv-on-change="onChange" rv-checked="<?php echo $model['is_field_setting'] ? 'field' : 'settings'; ?>.<?php echo $model['id']; ?>" type="checkbox" >
            <label class="wapf-toggle__label" for="wapf-toggle-">
                <span class="wapf-toggle__inner" data-true="<?php _e('Yes','sw-wapf'); ?>" data-false="<?php _e('No','sw-wapf'); ?>"></span>
                <span class="wapf-toggle__switch"></span>
            </label>
        </div>

    </div>
</div>