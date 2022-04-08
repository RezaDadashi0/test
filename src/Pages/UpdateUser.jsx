import React from "react";
import { Form, Formik } from "formik";
import Input from "../Components/Input";
import * as Yup from "yup";
import Select from "../Components/Select";
import Header from "../Components/Header";

const UpdateUser = ({ user, onUpdateUser, history }) => {
  const options = [
    { key: "تحصیلات را وارد کنید", value: "" },
    { key: "دیپلم", value: 1 },
    { key: "لیسانس", value: 2 },
  ];
  const initialValues = {
    name: user.name,
    fatherName: user.fatherName,
    education: user.grade,
    lastName: user.lastname,
    phoneNumber: user.phoneNumer,
    university: user.university,
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

  const onSubmit = (values) => {
    const { name, fatherName, university } = values;
    const updatedUser = {
      name,
      lastname: values.lastName,
      fatherName,
      phoneNumer: values.phoneNumber,
      grade: values.education,
      university,
    };
    onUpdateUser(updatedUser);
    history.push("/home");
  };

  return (
    <div className="container pt-2">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row shadow rounded mb-5 p-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6 className="titr text-right pb-3">ویرایش کاربر</h6>
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
                        ویرایش
                      </button>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
