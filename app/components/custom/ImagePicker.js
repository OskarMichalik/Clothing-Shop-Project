'use client';
import { useRef } from 'react';
import classes from './ImagePicker.module.css';
import Image from 'next/image';

export default function ImagePicker({ id, pickedImage, setPickedImage }) {
    

    const imageInputRef = useRef();
    function handleClickButton() {
        imageInputRef.current.click();
    }
    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt='The image selected by the user' fill />}
                </div>
                <input type='file' id={id} name={id} accept='image/png, image/jpeg' className={classes.input} ref={imageInputRef} onChange={handleImageChange} required />
                <button className={classes.button} type='button' onClick={handleClickButton}>Pick your Image</button>
            </div>
        </div>
    );
}