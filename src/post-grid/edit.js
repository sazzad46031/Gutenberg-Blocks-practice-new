import { __ } from '@wordpress/i18n';


import { InspectorControls, useBlockProps } from '@wordpress/block-editor';


import { PanelBody, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';

import { SlArrowDown,SlArrowUp } from "react-icons/sl";



import './editor.scss';
import { useState } from 'react';

const renderTemplates = (alignment, toggleField, titleMaxLength) => {

	const fullTitle = "Action Camera made by sony"

	const trimmedtitle = fullTitle.length > titleMaxLength ? fullTitle.substring(0, titleMaxLength) + '...' : fullTitle

	return (
		<div style={{textAlign : alignment}}>
			<img
				src='https://i.ibb.co.com/KmxhDHs/29-04-2017-zagreb-croatia-260nw-631998014.webp'
				alt='Action Camera'
				width="50%"
			/>
			<div>
				{toggleField && <h3>{trimmedtitle}</h3>}
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros id libero cursus finibus. Phasellus luctus, augue eu tempus fringilla, magna velit gravida arcu, in tristique tellus turpis vitae odio. Integer at justo sed sem consectetur vulputate non eget neque.</p>
			</div>
		</div>
	)
}

export default function Edit({attributes, setAttributes}) {

	const {selectField, toggleField, titleMaxLength } = attributes;

	const [isOpen, setIsOpen] = useState(false);

	function onChangeSelectField (newValue) {
		setAttributes({ selectField : newValue})
	}
	function onChangeToggleField (newValue) {
		setAttributes({ toggleField : newValue})
	}
	function onChangeRangeField (newValue) {
		setAttributes({ titleMaxLength : newValue})
	}
	return (
		<section { ...useBlockProps() }>
			<div>
				{renderTemplates(selectField, toggleField , titleMaxLength)}
			</div>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={true}>
					<SelectControl
						__nextHasNoMarginBottom
						label="Alignment"
						value={ selectField }
						options={ [
							{ value: 'left', label: 'Left' },
							{ value: 'center', label: 'Center' },
							{ value: 'right', label: 'Right' },
						] }
						onChange={ onChangeSelectField }
					/>

					
					<div className="accordion">
						<div className="accordion-item">

							<div 
								className="accordion-header"
								onClick={() => setIsOpen(!isOpen)}
							>
								<h3 className="accordion-title">Title</h3>

								<div className="accordion-group">
									<ToggleControl
										checked={toggleField}
										onChange={onChangeToggleField}
									/>
									<span>
										{isOpen ? <SlArrowUp/> : <SlArrowDown/>}
									</span>
								</div>
							</div>

							{isOpen && (
								<div className="accordion-body">
									<RangeControl
										label="Title Max Length"
										value={titleMaxLength}
										onChange={ onChangeRangeField }
										min={5}
										max={30}
										__nextHasNoMarginBottom
									/>
								</div>
							)}

						</div>
					</div>
				</PanelBody>
			</InspectorControls>
		</section>
	);
}
