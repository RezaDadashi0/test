import React from "react";
import { Form, Formik } from "formik";
import Input from "./Input";
import * as Yup from "yup";
import Select from "./Select";

const NewUser = ({ onAddNewUser, id }) => {
  const options = [
    { key: "تحصیلات را وارد کنید", value: "" },
    { key: "دیپلم", value: 1 },
    { key: "لیسانس", value: 2 },
  ];
  const initialValues = {
    name: "",
    fatherName: "",
    education: "",
    lastName: "",
    phoneNumber: "",
    university: "",
  };
  const validate = Yup.object({
    name: Yup.string()
      .min(2, "وارد نمودن حداقل ۲ کاراکتر الزامی است.")
      .max(15, "کاراکتر بیش از حد مجاز.")
      .required("وارد نمودن این فیلد الزامی است"),
    fatherName: Yup.string()
      .min(2, "وارد نمودن حداقل ۲ کاراکتر الزامی است.")
      .max(15, "کاراکتر بیش از حد مجاز.")
      .required("وارد نمودن این فیلد الزامی است"),
    education: Yup.number().required("وارد نمودن این فیلد الزامی است"),
    lastName: Yup.string()
      .min(2, "وارد نمودن حداقل ۲ کاراکتر الزامی است.")
      .max(15, "کاراکتر بیش از حد مجاز.")
      .required("وارد نمودن این فیلد الزامی است"),
    phoneNumber: Yup.string()
      .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/g, "شماره همراه معتبر نمی باشد")
      .required("وارد نمودن این فیلد الزامی است"),
    university: Yup.string(),
  });

  const onSubmit = (values, onSubmitProps) => {
    const { name, fatherName, university } = values;
    const newUser = {
      name,
      lastname: values.lastName,
      fatherName,
      phoneNumer: values.phoneNumber,
      grade: values.education,
      university,
      id,
    };
    onAddNewUser(newUser);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <div className="row shadow rounded mb-5 p-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h6 className="titr text-right pb-3">افزودن کاربر</h6>
          </div>
        </div>
        <div className="row">
          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <>
                <Form style={{ width: "100%", textAlign: "center" }}>
                  <div className="row">
                    <div className="col-4">
                      <Input type="text" label="نام" name="name" id="نام" />
                    </div>
                    <div className="col-4">
                      <Input
                        type="text"
                        label="نام پدر"
                        name="fatherName"
                        id="نام پدر"
                      />
                    </div>
                    <div className="col-4">
                      <Select
                        label="تحصیلات"
                        name="education"
                        options={options}
                      />
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-4">
                      <Input
                        type="text"
                        label="نام خانوادگی"
                        name="lastName"
                        id="نام خانوادگی"
                      />
                    </div>
                    <div className="col-4">
                      <Input
                        type="number"
                        label="شماره تماس"
                        name="phoneNumber"
                        id="شماره تماس"
                      />
                    </div>
                    {formik.values.education === "2" && (
                      <div className="col-4">
                        <Input
                          type="text"
                          label="دانشگاه"
                          name="university"
                          id="دانشگاه"
                        />
                      </div>
                    )}
                  </div>
                  <div className="row mt-4">
                    <button
                      type="submit"
                      className="btn btn-outline-secondary px-5 mx-auto"
                    >
                      افزودن
                    </button>
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
