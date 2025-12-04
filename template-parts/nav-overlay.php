<nav class="nav-overlay">
    <?php if ( get_field('nav_logo', 'option') ) : $image = get_field('nav_logo', 'option'); ?>
        <img class="logo style-svg show-for-large"  src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"/>
    <?php endif; ?>
    <div class="nav-container">
        <?php if ( get_field('logo', 'option') ) : $logo = get_field('logo', 'option'); ?>
            <a href="<?php echo site_url(); ?>">
                <img class="logo style-svg hide-for-large" src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>"/>
            </a>
        <?php endif; ?>
        <div class="fire-navigation">
            <a href="#">- close</a>
        </div>
        <div class="nav-menus">
            <?php foundationpress_overlay_nav_primary(); ?>
        </div>
    </div>
</nav>