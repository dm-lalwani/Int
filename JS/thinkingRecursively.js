let user = {
  name: "Dinesh",
  address: {
    city: "Nashik",
    area: "Shahu Nagar",
    pincode: null,
    state: undefined,
  },
  greet: function () {
    console.log("Hello" + this.name);
  },
  hobbies: ["Cricket", "Music"],
  office: {
    city: "Pune",
    area: {
      landmark: "Baner",
    },
  },
  createdAt: new Date(),
};

let userChild = Object.create(user);

userChild.lastName = "Lalwani";

let finalObj = {};
function flattenObject(obj, parent) {
  for (const key of Object.keys(obj)) {
    // if (obj[key] == null) {
    //   finalObj[parent + "_" + key] = "";
    //   continue;
    // }
    // if (!obj.hasOwnProperty(key)) continue;
    if (typeof obj[key] === "function") {
      finalObj[parent + "_" + key] = obj[key].name;
      continue;
    }
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    )
      flattenObject(obj[key], parent + "_" + key);
    else finalObj[parent + "_" + key] = obj[key];
  }
}

flattenObject(userChild, "userChild");
console.log(finalObj);
