<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://kit.fontawesome.com/d0450f1ea1.js"></script>
		<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"/>
		<?php wp_head(); ?>
	</head>
	<body data-barba="wrapper">
		<?php // get_template_part( 'template-parts/nav-overlay' ); ?>
		
		<ul class="transition">
			<li>
				<!-- <span id="transitionAnimation" data-animation="<?php the_field('transition_animation', 'option') ?>"></span> -->
			</li>
		</ul>

		<div id="fade-wrap" data-barba="container" <?php body_class(); ?>>
		<header class="site-header">
			<?php if ( get_field('logo', 'option') ) : $logo = get_field('logo', 'option'); ?>
				<a href="<?php echo site_url(); ?>">
					<img class="logo style-svg" src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>"/>
				</a>
			<?php endif; ?>
			<nav class="top-bar-right">
				<?php foundationpress_top_bar_r(); ?>
			</nav>
			<?php get_template_part( 'template-parts/nav-overlay' ); ?>
		</header>
