import {ErrorMessage, Field} from "formik";

export const FieldFom = ({
                             label,
                             id,
                             name,
                             type = "text",
                             placeholder,
                             textarea = false,
                             maxLength,
                             rows,
                         }: {
    label: string;
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
    textarea?: boolean;
    maxLength?: number;
    rows?: number;

}) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label}
        </label>
        {textarea ? (
            <Field
                as="textarea"
                id={id}
                name={name}
                placeholder={placeholder}
                maxLength={maxLength}
                rows={rows}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
        ) : (
            <Field
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
        )}
        <ErrorMessage name={name} component="div" className="text-red-500 text-sm mt-1"/>
    </div>
);

