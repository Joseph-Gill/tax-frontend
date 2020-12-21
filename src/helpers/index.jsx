export const imageClickHandler = (input) => {
    input.current.click();
}

export const imageChangeHandler = (e, set) => {
    if (e.target.files[0]) {
        set(e.target.files[0])
    }
}

export const allowOnlyOneCheckedBox = (e, initialArray, arraySet) => {
    const dataCopy = [...initialArray]
    for (let i = 0; i < dataCopy.length; i++) {
        if (i === parseInt(e.target.value)) {
            dataCopy[i].isChecked = !dataCopy[i].isChecked
        } else {
            dataCopy[i].isChecked = false
        }
    }
    arraySet([...dataCopy])
}

export const checkBoxChangeHandler = (e, initialArray, arraySet) => {
    const dataCopy = [...initialArray]
    dataCopy[e.target.value].isChecked = !dataCopy[e.target.value].isChecked
    arraySet([...dataCopy])
}
