<?php
	$alignment = $attributes['selectField'] ?? 'left';
	$toggle    = $attributes['toggleField'] ?? true;
	$max       = $attributes['titleMaxLength'] ?? 10;

	$full_title = "Action Camera made by Sony";

	$trimmed_title = mb_strlen($full_title) > $max
		? mb_substr($full_title, 0, $max) . '...'
		: $full_title;

	?>

	<section <?php echo wp_kses_data( get_block_wrapper_attributes() )?> style="text-align: <?php echo esc_attr($alignment); ?>">
		<img 
			src="https://i.ibb.co.com/KmxhDHs/29-04-2017-zagreb-croatia-260nw-631998014.webp"
			alt="Action Camera"
			width="50%"
		/>

		<div>
			<?php if ( $toggle ) : ?>
				<h3><?php echo esc_html($trimmed_title); ?></h3>
			<?php endif; ?>

			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros id libero cursus finibus. Phasellus luctus, augue eu tempus fringilla, magna velit gravida arcu, in tristique tellus turpis vitae odio. Integer at justo sed sem consectetur vulputate non eget neque.</p>
		</div>
	</section>

<?php
	

