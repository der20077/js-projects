const form = document.getElementById("myForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const age = document.getElementById("age");
const dateInput = document.getElementById("date");

const createNameMask = (element) => {
  return IMask(element, {
    mask: /^[А-Яа-яЁё\s]*$/,
    prepare: (value) => value,
    commit: (value, masked) => {
      const formattedValue = value
        .toLowerCase()
        .replace(/(^|\s)[а-яё]/g, (char) => char.toUpperCase());
      masked._value = formattedValue;
      return formattedValue;
    },
  });
};

createNameMask(firstName);

createNameMask(lastName);

IMask(age, {
  mask: Number,
  min: 0,
  max: 120,
});

IMask(emailInput, {
  mask: function () {
    return true;
  },
  commit: (value, masked) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      console.log("Некорректный email");

      masked._value = "";
    }
    return value;
  },
});

IMask(phone, { mask: "+{7}(000)000-00-00", lazy: false });

IMask(dateInput, {
  mask: Date,
  pattern: "d{.}`m{.}`Y",
  autofix: true,
  lazy: false,
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2,
      placeholderChar: "d",
    },
    m: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2,
      placeholderChar: "m",
    },
    Y: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: 2050,
      maxLength: 4,
      placeholderChar: "Y",
    },
  },
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: emailInput.value,
    age: age.value,
    date: dateInput.value,
  };
});

