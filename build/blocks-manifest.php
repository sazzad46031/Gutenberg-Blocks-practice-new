<?php
// This file is generated. Do not modify it manually.
return array(
	'post-grid' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/post-grid',
		'version' => '0.1.0',
		'title' => 'Post Grid',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'attributes' => array(
			'selectField' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'toggleField' => array(
				'type' => 'boolean',
				'default' => true
			),
			'titleMaxLength' => array(
				'type' => 'number',
				'default' => 10
			)
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'text' => true
			),
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'post-grid',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
