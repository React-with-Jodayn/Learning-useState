import { ChangeEvent, useState, useEffect } from "react";

export default function MyForm() {
  const formStyle = {
    border: "4px double #880303",
    padding: "18px 0px",
  };
  const [formInputs, setFormInputs] = useState({
    name: "",
    password: "",
    generalInfo: "",
    student: false,
    studentStauts: "",
    country: "",
  });
  useEffect(() => {
    const savedInputs = localStorage.getItem("formData");
    setFormInputs(savedInputs ? JSON.parse(savedInputs) : "");
  }, []);
  return (
    <>
      <form
        action=""
        style={formStyle}
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = { ...formInputs };
          console.log(formData);
          localStorage.setItem("formData", JSON.stringify(formData));
        }}
      >
        <label htmlFor="name123">Name : </label>
        <input
          type="text"
          id="name123"
          value={formInputs.name}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFormInputs({ ...formInputs, name: event.target.value })
          }
        />
        <hr />
        <label htmlFor="pass">Password : </label>
        <input
          type="password"
          id="pass"
          value={formInputs.password}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFormInputs({
              name: formInputs.name,
              generalInfo: formInputs.generalInfo,
              student: formInputs.student,
              password: event.target.value,
              studentStauts: formInputs.studentStauts,
              country: formInputs.country,
            })
          }
        />
        <hr />
        <input
          type="checkbox"
          name="areYouStudent"
          id="chBox"
          checked={formInputs.student}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFormInputs({ ...formInputs, student: event.target.checked })
          }
        />
        <label htmlFor="chBox">Are yor a Student</label>
        {formInputs.student && (
          <div>
            <input
              type="radio"
              name="degree"
              id="master"
              value="master"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setFormInputs({
                  ...formInputs,
                  studentStauts: event.target.value,
                })
              }
            />
            <label htmlFor="master">master</label>
            <input
              type="radio"
              name="degree"
              id="phd"
              value="phd"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setFormInputs({
                  ...formInputs,
                  studentStauts: event.target.value,
                })
              }
            />
            <label htmlFor="phd">phd</label>
          </div>
        )}
        <hr />
        <select
          name="country1"
          id="country1"
          value={formInputs.country}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            setFormInputs({ ...formInputs, country: event.target.value })
          }
        >
          <option value="1">country1</option>
          <option value="2">country2</option>
          <option value="3">country3</option>
        </select>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <label htmlFor="txtarea">General Info</label>
          <textarea
            name="generalInfo"
            id="txtarea"
            value={formInputs.generalInfo}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setFormInputs({ ...formInputs, generalInfo: event.target.value })
            }
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
