export const imageClickHandler = (input) => {
        input.current.click();
    }

export const imageChangeHandler = (e, set) => {
        if (e.target.files[0]) {
            set(e.target.files[0])
        }
    }
