<?php
$alignment      = $attributes['selectField'] ?? 'left';
$toggleTitle    = $attributes['toggleTitle'] ?? true;
$toggleDesc     = $attributes['toggleDesc'] ?? true;
$titleMaxLength = $attributes['titleMaxLength'] ?? 10;
$descMaxLength  = $attributes['descMaxLength'] ?? 150;
$titleTag       = $attributes['titleTag'] ?? 'h3';
$titleColor     = $attributes['titleColor'] ?? '#000000';

$full_title = "Action Camera made by Sony";

$trimmed_title = mb_strlen($full_title) > $titleMaxLength
	? mb_substr($full_title, 0, $titleMaxLength) . '...'
	: $full_title;

$full_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros id libero cursus finibus. Phasellus luctus, augue eu tempus fringilla, magna velit gravida arcu, in tristique tellus turpis vitae odio. Integer at justo sed sem consectetur vulputate non eget neque.";

$trimmed_desc = mb_strlen($full_desc) > $descMaxLength
	? mb_substr($full_desc, 0, $descMaxLength) . '...'
	: $full_desc;
?>

<section <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> 
	style="text-align: <?php echo esc_attr($alignment); ?>">
	
	<img 
		src="https://i.ibb.co.com/KmxhDHs/29-04-2017-zagreb-croatia-260nw-631998014.webp"
		alt="Action Camera"
		width="50%"
	/>

	<div>

		<?php if ( $toggleTitle ) : ?>
			<<?php echo esc_attr( $titleTag ); ?>
				style="color: <?php echo esc_attr( $titleColor ); ?>;"
			>
				<?php echo esc_html( $trimmed_title ); ?>
			</<?php echo esc_attr( $titleTag ); ?>>
		<?php endif; ?>

		<?php if ( $toggleDesc ) : ?>
			<p><?php echo esc_html( $trimmed_desc ); ?></p>
		<?php endif; ?>

	</div>
</section>
