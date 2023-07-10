/* eslint-disable react/prop-types */
const BtnHero = (props) => {
  return (
    <button
        className="
            mt-4
            px-4
            py-2
            bg-[#111827]
            text-white rounded
        "
    >
        {props.name}
    </button>
  )
}

export default BtnHero