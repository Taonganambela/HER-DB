import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./drop-file-input.css";
import { ImageConfig } from "../../config/ImageConfig";
import uploadImg from "../../assets/cloud-upload-regular-240.png";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

interface DragDropFileProps {
	onFileChange: (fileList: File[]) => void;
}

const DragDropFile: React.FC<DragDropFileProps> = (props) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [fileList, setFileList] = useState<File[]>([]);

	const onDragEnter = () => wrapperRef.current?.classList.add("dragover");
	const onDragLeave = () => wrapperRef.current?.classList.remove("dragover");
	const onDrop = () => wrapperRef.current?.classList.remove("dragover");

	const onFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newFile = e.target.files?.[0];
		if (newFile) {
			const updatedList = [...fileList, newFile];
			setFileList(updatedList);
			props.onFileChange(updatedList);
		}
	};

	const fileRemove = (file: File) => {
		const updatedList = [...fileList];
		const index = updatedList.indexOf(file);
		if (index !== -1) {
			updatedList.splice(index, 1);
			setFileList(updatedList);
			props.onFileChange(updatedList);
		}
	};

	return (
		<div className="dark:bg-bkgSecondary dark:text-content   p-8 w-full h-screen">
			<div className="flex ml-auto items-center justify-between w-full mb-8">
				<div className="inline-block">
					<h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300">
						Resignation
					</h1>
				</div>
			</div>

			<div className="center-items justify-center flex">
				<div className="drop-file-input__label border-4 border-gray-800 dark:border-white rounded-lg border-dashed w-[400px]">
					<div className="text-center center-items justify-center flex mt-8">
						<div
							ref={wrapperRef}
							className="drop-file-input"
							onDragEnter={onDragEnter}
							onDragLeave={onDragLeave}
							onDrop={onDrop}
						>
							<div className="">
								<img src={uploadImg} alt="" className="ml-12" />
								<p className="w-full text-center">
									Drag & Drop your files here
								</p>
							</div>
							<input type="file" value="" onChange={onFileDrop} />
						</div>
					</div>
				</div>
			</div>

			{fileList.length > 0 ? (
				<div className="drop-file-preview">
					<p className="drop-file-preview__title">Ready to upload</p>
					{fileList.map((item, index) => (
						<div key={index} className="drop-file-preview__item">
							{/*  tsx Error */}
							<img
								src={
									ImageConfig[item.type.split("/")[1]] ||
									ImageConfig["default"]
								}
								alt=""
							/>
							<div className="drop-file-preview__item__info">
								<p>{item.name}</p>
								<p>{item.size}B</p>
							</div>
							<span
								className="drop-file-preview__item__del"
								onClick={() => fileRemove(item)}
							>
								<IconButton className="text-gray-900 dark:text-gray-500">
									<ClearRoundedIcon className="text-gray-500 h-10 w-[100px]" />
								</IconButton>
							</span>
						</div>
					))}
				</div>
			) : null}

			<div className="absolute bottom-44  mt-10">
                <Link to='/resignation'>
				<button className="bg-[#549B69] text-sm text-white h-14 w-[200px] rounded-md">
					Send
				</button></Link>
			</div>
		</div>
	);
};

DragDropFile.propTypes = {
	onFileChange: PropTypes.func.isRequired,
};

export default DragDropFile;
