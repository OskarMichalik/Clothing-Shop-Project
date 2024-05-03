import Input from "../custom/Input";
import Modal from "../Modal";
import Button from "../custom/Button";
import BuyItemFn from "./BuyItemFn";
import { useInput } from "@/app/hooks/useInput";
import { isEmail, isNotEmpty } from "@/app/util/validation";

export default function BuyItem({ onClose, itemId }) {
    const { value: emailValue,
        handleBlur: handleEmailBlur,
        handleInputChange: handleEmailInputChange,
        hasError: emailIsInvalid } = useInput('', (value) => isEmail(value) && isNotEmpty(value) );
    const { value: addressValue,
        handleBlur: handleAddressBlur,
        handleInputChange: handleAddressInputChange,
        hasError: addressIsInvalid } = useInput('', (value) =>  isNotEmpty(value) );
    const { value: postalCodeValue,
        handleBlur: handlePostalCodeBlur,
        handleInputChange: handlePostalCodeInputChange,
        hasError: postalCodeIsInvalid } = useInput('', (value) =>  isNotEmpty(value) );

    const isFormInCorrect = (emailIsInvalid || !isNotEmpty(emailValue) || addressIsInvalid || !isNotEmpty(addressValue) || postalCodeIsInvalid || !isNotEmpty(postalCodeValue));
    //console.log("Is Form Incorrect?");
    //console.log(isFormInCorrect);

    function submit(formData){
        if(isFormInCorrect){
            console.log("Error - Could not send the form");
            return;
        }
        BuyItemFn(formData, itemId, isFormInCorrect);
        onClose();
    }

    return (
        <Modal onClose={onClose} title={'Buy choosen item'}>
            <form id="form-buying-item" action={submit}>
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
                    <label htmlFor="address">Address:</label><br />
                    <Input id='address' placeholder="Tell us your address" required
                        onChange={handleAddressInputChange}
                        value={addressValue}
                        onBlur={handleAddressBlur}
                        error={addressIsInvalid && "Please enter a valid address."}
                    />
                </p>
                <p>
                    <label htmlFor="postalCode">Postal Code:</label><br />
                    <Input id="postalCode" name="postalCode" placeholder="Write your postal code" required
                        onChange={handlePostalCodeInputChange}
                        value={postalCodeValue}
                        onBlur={handlePostalCodeBlur}
                        error={postalCodeIsInvalid && "Please enter a valid postal code."}
                    />
                </p>
                <p className="form-buttons">
                    <Button className='text-only-button' onClick={onClose}>Close</Button>
                    <Button type="submit">Buy now</Button>
                </p>
            </form>
        </Modal>
    );
}


/*  4/30/2024 2:53PM

import Input from "../custom/Input";
import Modal from "../Modal";
import Button from "../custom/Button";
import BuyItemFn from "./BuyItemFn";

export default function BuyItem({ onClose, itemId }) {
    return (
        <Modal onClose={onClose} title={'Buy choosen item'}>
            <form id="form-buying-item" action={ (formData)=>BuyItemFn(formData,itemId) }>
                <p>
                    <label htmlFor="email">Email:</label><br />
                    <Input id='email' placeholder="Tell us your email" required />
                </p>
                <p>
                    <label htmlFor="address">Address:</label><br />
                    <Input id='address' placeholder="Tell us your address" required />
                </p>
                <p>
                    <label htmlFor="postalCode">Postal Code:</label><br />
                    <Input id="postalCode" name="postalCode" placeholder="Write your postal code" required />
                </p>
                <p className="form-buttons">
                    <Button className='text-only-button' onClick={onClose}>Close</Button>
                    <Button type="submit">Buy now</Button>
                </p>
            </form>
        </Modal>
    );
}

*/