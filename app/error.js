'use client';

import Button from "./components/custom/Button";

export default function Error() {

    return (
        <div className="errorMain">
            <h2>Something went wrong!</h2>
            <Button onClick={() => reset()}>Try Again</Button>
        </div>
    );
}