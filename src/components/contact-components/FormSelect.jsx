// select dropdown menu for contact form
const FormSelect = () => {
    return (
        <select name="genre" 
                type="select"
                className="w-full
                            text-center
                            border-2
                            h-8
                            rounded-md
                            -mt-4" >

            <option value="">-- Please Select --</option>
            <option value="metal">Metal</option>
            <option value="altMet">Alternative Metal</option>
            <option value="deathMetal">Death Metal</option>
            <option value="metalcore">Metalcore</option>
            <option value="deathcore">Deathcore</option>
            <option value="popPunk">Pop Punk</option>
            <option value="punk">Punk</option>
            <option value="techMetal">Tech Metal</option>
            <option value="other">Other</option>
        </select>
    );
}

export default FormSelect;