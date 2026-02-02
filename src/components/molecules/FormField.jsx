import Input from "../atoms/Input";
import Select from "../atoms/Select";

const FormField = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#333333AD] text-sm">{props.label} <span className="text-[#FF5C2B]">*</span></label>
      {props.type === "select" ? (
        <Select options={props.options} />
      ) : (
        <Input type={props.type} placeholder={props.placeholder} />
      )}
    </div>
  )
};

export default FormField;