import { __ } from '@wordpress/i18n';


import { InspectorControls, useBlockProps } from '@wordpress/block-editor';


import { PanelBody, RangeControl, SelectControl, ToggleControl, ColorPalette } from '@wordpress/components';

import { SlArrowDown,SlArrowUp } from "react-icons/sl";



import './editor.scss';
import { useState } from 'react';

const renderTemplates = (alignment, toggleTitle, toggleDesc, titleMaxLength, descMaxLength, titleTag, titleColor) => {

	const fullTitle = "Action Camera made by sony"

	const trimmedtitle = fullTitle.length > titleMaxLength ? fullTitle.substring(0, titleMaxLength) + '...' : fullTitle

	const fullDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec eros id libero cursus finibus. Phasellus luctus, augue eu tempus fringilla, magna velit gravida arcu, in tristique tellus turpis vitae odio. Integer at justo sed sem consectetur vulputate non eget neque."

	const trimmedDesc = fullDesc.length > descMaxLength ? fullDesc.substring(0, descMaxLength) + '...' : fullDesc

	return (
		<div style={{textAlign : alignment}}>
			<img
				src='https://i.ibb.co.com/KmxhDHs/29-04-2017-zagreb-croatia-260nw-631998014.webp'
				alt='Action Camera'
				width="50%"
			/>
			<div>
				{toggleTitle && React.createElement(titleTag, { style: { color: titleColor } }, trimmedtitle)}

				{toggleDesc && <p>{trimmedDesc}</p>}
			</div>
		</div>
	)
}

export default function Edit({attributes, setAttributes}) {

	const {selectField, toggleTitle, toggleDesc, titleMaxLength, descMaxLength, titleTag, titleColor } = attributes;

	const [isOpenTitle, setIsOpenTitle] = useState(false);

	const [isOpenDesc, setIsOpenDesc] = useState(false);

	const [activeTabTitle, setActiveTabTitle] = useState("settings");

	

	const colors = [
		{name : 'red', color : '#D91919'},
		{name : 'white', color: '#fff'},
		{name : 'black', color: '#000'} 
	];

	function onChangeSelectField (newValue) {
		setAttributes({ selectField : newValue})
	}
	function onChangeToggleTitle (newValue) {
		setAttributes({ toggleTitle : newValue})
	}
	function onChangeToggleDesc (newValue) {
		setAttributes({ toggleDesc : newValue})
	}
	function onChangeRangeTitle (newValue) {
		setAttributes({ titleMaxLength : newValue})
	}
	function onChangeRangeDesc (newValue) {
		setAttributes({ descMaxLength : newValue})
	}
	return (
		<section { ...useBlockProps() }>
			<div>
				{renderTemplates(selectField, toggleTitle, toggleDesc, titleMaxLength, descMaxLength, titleTag, titleColor)}
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
								onClick={() => setIsOpenTitle(!isOpenTitle)}
							>
								<h3 className="accordion-title">Title</h3>

								<div className="accordion-group">
									<div onClick={(e)=> e.stopPropagation()}>
										<ToggleControl
											checked={toggleTitle}
											onChange={onChangeToggleTitle}
										/>
									</div>
									<span>
										{isOpenTitle ? <SlArrowUp/> : <SlArrowDown/>}
									</span>
								</div>
							</div>

							{isOpenTitle && (
								<div className="accordion-body">
									 <div className="gs-tabs">

										{/* Tab Buttons */}
										<div className="gs-tab-buttons">
											<button 
											className={activeTabTitle === "settings" ? "active" : ""} 
											onClick={() => setActiveTabTitle("settings")}
											>
											Settings
											</button>

											<button 
											className={activeTabTitle === "style" ? "active" : ""} 
											onClick={() => setActiveTabTitle("style")}
											>
											Style
											</button>

										</div>

										{/* Tab Content */}
										<div className="gs-tab-content">
											{activeTabTitle === "settings" && 
												<div>
													<SelectControl
														label="Title Tag"
														value={ titleTag }
														options={[
															{ label: 'H1', value: 'h1' },
															{ label: 'H2', value: 'h2' },
															{ label: 'H3', value: 'h3' },
															{ label: 'H4', value: 'h4' },
															{ label: 'H5', value: 'h5' },
															{ label: 'H6', value: 'h6' },
															{ label: 'P',  value: 'p' },
															{ label: 'Span', value: 'span' },
															{ label: 'Div', value: 'div' },
														]}
														onChange={(newValue) => setAttributes({ titleTag: newValue })}
													/>

													<RangeControl
														label="Title Max Length"
														value={titleMaxLength}
														onChange={ onChangeRangeTitle }
														min={5}
														max={30}
														__nextHasNoMarginBottom
													/>
												</div>}
											{activeTabTitle === "style" && 
												<div>
													<ColorPalette
														colors={colors}
														value={titleColor}
														onChange={(newColor) => setAttributes({ titleColor: newColor })}
													/>
												</div>}
										</div>
									</div>
									
								</div>
							)}

						</div>
					</div>
					<div className="accordion">
						<div className="accordion-item">

							<div 
								className="accordion-header"
								onClick={() => setIsOpenDesc(!isOpenDesc)}
							>
								<h3 className="accordion-title">Description</h3>

								<div className="accordion-group">
									<div onClick={(e) => e.stopPropagation()}>
										<ToggleControl
											checked={toggleDesc}
											onChange={onChangeToggleDesc}
										/>
									</div>
									<span>
										{isOpenDesc ? <SlArrowUp/> : <SlArrowDown/>}
									</span>
								</div>
							</div>

							{isOpenDesc && (
								<div className="accordion-body">
									<RangeControl
										label="Title Max Length"
										value={descMaxLength}
										onChange={ onChangeRangeDesc }
										min={50}
										max={450}
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
