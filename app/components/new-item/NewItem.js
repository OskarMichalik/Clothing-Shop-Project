import Input from "../custom/Input";
import Modal from "../Modal";
import Button from "../custom/Button";
import ImagePicker from "../custom/ImagePicker";
import formSubmitFn from "../custom/formSubmitFn";
import CategorySelect from "../custom/CategorySelect";
import { useInput } from "@/app/hooks/useInput";
import { useState } from "react";
import { isNotEmpty, isEmail, hasMinLength } from "@/app/util/validation";
import { useRouter } from "next/navigation";

export default function NewItem({ onClose }) {
    const [pickedImage, setPickedImage] = useState();
    const router = useRouter();


    const { value: emailValue,
        handleBlur: handleEmailBlur,
        handleInputChange: handleEmailInputChange,
        hasError: emailIsInvalid } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
    const { value: titleValue,
        handleBlur: handleTitleBlur,
        handleInputChange: handleTitleInputChange,
        hasError: titleIsInvalid } = useInput('', (value) => isNotEmpty(value));
    const { value: descriptionValue,
        handleBlur: handleDescriptionBlur,
        handleInputChange: handleDescriptionInputChange,
        hasError: descriptionIsInvalid } = useInput('', (value) => isNotEmpty(value) && hasMinLength(value, 25));
    const { value: categoryValue,
        handleBlur: handleCategoryBlur,
        handleInputChange: handleCategoryInputChange,
        hasError: categoryIsInvalid } = useInput('', (value) => isNotEmpty(value));
    const { value: priceValue,
        handleBlur: handlePriceBlur,
        handleInputChange: handlePriceInputChange,
        hasError: priceIsInvalid } = useInput('', (value) => isNotEmpty(value));

    const isFormInCorrect = (emailIsInvalid || !isNotEmpty(emailValue) || titleIsInvalid || !isNotEmpty(titleValue) || descriptionIsInvalid || !isNotEmpty(descriptionValue) || categoryIsInvalid || !isNotEmpty(categoryValue) || priceIsInvalid || !isNotEmpty(priceValue) || !pickedImage);
    //console.log("Is Form Incorrect?");
    //console.log(isFormInCorrect);

    function submit(formData) {
        if(isFormInCorrect) {
            return;
        }
        formSubmitFn(formData);
        router.refresh();
        onClose();
    }

    return (
        <Modal onClose={onClose} title={'Sell your Item'}>
            <form id="form-adding-item" action={submit}>
                <p>
                    <label htmlFor="email">Email:</label><br />
                    <Input id='email' placeholder="Tell us your email" required
                        onChange={handleEmailInputChange}
                        value={emailValue}
                        onBlur={handleEmailBlur}
                        error={emailIsInvalid && "Please enter a valid email address."}
                    />
                </p>
                <p>
                    <label htmlFor="title">Title:</label><br />
                    <Input id='title' placeholder="Give your item a title" required
                        onChange={handleTitleInputChange}
                        value={titleValue}
                        onBlur={handleTitleBlur}
                        error={titleIsInvalid && "Please enter a valid title."}
                    />
                </p>
                <p>
                    <label htmlFor="description">Description:</label><br />
                    <Input id="description" name="description" placeholder="Describe your item" textArea required
                        onChange={handleDescriptionInputChange}
                        value={descriptionValue}
                        onBlur={handleDescriptionBlur}
                        error={descriptionIsInvalid && "Please enter a valid description ( Min 25 letters ). "}
                    />
                </p>
                <p>
                    <label htmlFor="category">Category:</label><br />
                    <CategorySelect
                        onChange={handleCategoryInputChange}
                        value={categoryValue}
                        onBlur={handleCategoryBlur}
                    />
                    {categoryIsInvalid && <span className="error-p">Please select a category.</span>}
                </p>
                <p>
                    <label htmlFor="image">Image:</label>
                </p>
                <ImagePicker id='image' setPickedImage={setPickedImage} pickedImage={pickedImage}/>

                <p>
                    <label htmlFor="price">Price:</label><br />
                    <Input type="number" id='price' placeholder="Set the price" required step='0.01'
                        onChange={handlePriceInputChange}
                        value={priceValue}
                        onBlur={handlePriceBlur}
                        error={priceIsInvalid && "Please select a price."}
                    />
                </p>
                <p className="form-buttons">
                    <Button className='text-only-button' onClick={onClose}>Close</Button>
                    <Button type="submit">Submit</Button>
                </p>
            </form>
        </Modal>
    );
}


/*  4/30/2024 4:01PM

import Input from "../custom/Input";
import Modal from "../Modal";
import Button from "../custom/Button";
import ImagePicker from "../custom/ImagePicker";
import formSubmitFn from "../custom/formSubmitFn";
import CategorySelect from "../custom/CategorySelect";

export default function NewItem({ onClose }) {

    return (
        <Modal onClose={onClose} title={'Sell your Item'}>
            <form id="form-adding-item" action={formSubmitFn}>
                <p>
                    <label htmlFor="email">Email:</label><br />
                    <Input id='email' placeholder="Tell us your email" required />
                </p>
                <p>
                    <label htmlFor="title">Title:</label><br />
                    <Input id='title' placeholder="Give your item a title" required />
                </p>
                <p>
                    <label htmlFor="description">Description:</label><br />
                    <Input id="description" name="description" placeholder="Describe your item" textArea required />
                </p>
                <p>
                    <label htmlFor="category">Category:</label><br />
                    <CategorySelect/>
                </p>
                <p>
                    <label htmlFor="image">Image:</label>
                </p>
                <ImagePicker id='image' />

                <p>
                    <label htmlFor="price">Price:</label><br />
                    <Input type="number" id='price' placeholder="Set the price" required step='0.01' />
                </p>
                <p className="form-buttons">
                    <Button className='text-only-button' onClick={onClose}>Close</Button>
                    <Button type="submit">Submit</Button>
                </p>
            </form>
        </Modal>
    );
}

*/