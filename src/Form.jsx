function submitForm(event) {
    console.log("Form submitted!");
}
export default function Form() {
    return (
        <form>
            <input type="text" placeholder="Enter text here" />
            <button onClick={submitForm} type="submit">Submit</button>
        </form>
    );
}