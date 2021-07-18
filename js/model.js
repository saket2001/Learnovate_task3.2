const state = {
  students: [
    {
      id: "1",
      name: "Mike Jenson",
      address: "Room 12 Gk Hostel,Mumbai",
      div: "A",
      std: "SE",
      grades: "8.21",
      contact: "9928102011",
      talent: "Plays football for college team",
      image:
        "https://images.generated.photos/0BoBuuMNNVNWUn547Y9mYmfXnpR8mU1wBvV_YugxaTM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsL2Uz/NThiOThhLWY0Njgt/NDczMS1iYjgxLThh/OWFiMzY5MjNiMy5q/cGc.jpg",
    },
    {
      id: "2",
      name: "Ava Scott",
      address: "Room 9 Gk Hostel,Mumbai",
      div: "A",
      std: "SE",
      grades: "9.01",
      contact: "9428155017",
      talent: "Plays Chess for college",
      image:
        "https://images.generated.photos/-ruIyQn7Tdp8_VBkb6242zWiOebG-gMX-XvBB-JmG4c/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzE2/NDJlMjQzLWY1YjQt/NGEwZC04NWM3LWFj/NGY5MTdhNDI2My5q/cGc.jpg",
    },
    {
      id: "3",
      name: "John Scott",
      address: "Room 2 Gk Hostel,Mumbai",
      div: "A",
      std: "SE",
      grades: "7.89",
      contact: "9328145017",
      talent: "Plays Cricket for college team",
      image:
        "https://images.generated.photos/k2jq7k4uWYO5PsvCRjPI1J10fvuvtwwLzZ7kAYE8Y5A/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsL2Nh/YmVjNzQ5LTMwOWEt/NGI5YS1hODFlLWI4/MWNkMGY3ZWM5Ny5q/cGc.jpg",
    },
    {
      id: "4",
      name: "John Lee",
      address: "Room 14 Gk Hostel,Mumbai",
      div: "A",
      std: "SE",
      grades: "8.89",
      contact: "9882855014",
      talent: "Plays Cricket for college team",
      image:
        "https://images.generated.photos/en_8ECjbD3MHPQ9eJhMpoc7Pt44hyG5mAZ9peYX9bVs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzQ3/MzY3ZGM2LTY1M2Ut/NDI4MC04MzdjLWQ0/YzA1YzQ0MmMzNi5q/cGc.jpg",
    },
    {
      id: "5",
      name: "Harry Ray",
      address: "Room 20 Gk Hostel,Mumbai",
      div: "A",
      std: "SE",
      grades: "9.29",
      contact: "9528340122",
      talent: "Works in technical team of college",
      image:
        "https://images.generated.photos/wnCXs4xMGPGPo0bqKI6mrvkY0tzRO9bbG4N73TPCS0s/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzhm/MDdjMTgxLWE0YjYt/NDQ4ZS1iOTA0LTNl/ZGUzYzg3OGFlOS5q/cGc.jpg",
    },
    {
      id: "6",
      name: "Vanshika Benet",
      address: "Room 6 Gk Hostel,Mumbai",
      div: "A",
      std: "SE",
      grades: "7.65",
      contact: "9112340222",
      talent: "Works as a News Reporter for college",
      image:
        "https://images.generated.photos/Sv_tVAlSiSQDnn_iqux6kEkGBElb2kpCeWRrjPE6GNg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsLzgy/OTczZTVkLWY5ZTIt/NGUyYS05YjY4LWVm/OTI3Nzc1YTg1ZS5q/cGc.jpg",
    },
    {
      id: "7",
      name: "Jeremy West",
      address: "Room 21 Gk Hostel,Mumbai",
      div: "A",
      std: "SE",
      grades: "10.00",
      contact: "9671244221",
      talent: "College Quiz Winner",
      image:
        "https://images.generated.photos/botqyBZrpWHEQL3ilFQxaGensjQTn1s2Ghr08Y4B9zA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsL2E1/NDJkMmU1LTZjNGYt/NGNiMC1iNDg2LWUx/NDY0NjkxNDI1Yi5q/cGc.jpg",
    },
    {
      id: "8",
      name: "Rowena Goodman",
      address: "Room 8 Gk Hostel,Mumbai",
      div: "A",
      std: "SE",
      grades: "10.00",
      contact: "9691184221",
      talent: "College Miss Scientist Winner",
      image:
        "https://images.generated.photos/yHlhiS3RC0UDIOcNL4NopE7f0LxOCQp9VfC4ilyLnTU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsL2I4/YmY5YWIwLTgxY2Qt/NDYwNy04ZTY1LTBk/YmIzZTU0MTM2Yi5q/cGc.jpg",
    },
    {
      id: "9",
      name: "Norris Eland",
      address: "Room 16 Gk Hostel,Mumbai",
      div: "A",
      std: "SE",
      grades: "7.80",
      contact: "9391184233",
      talent: "College's fastest runner winner",
      image:
        "https://images.generated.photos/Q5PBCwJiTyU2Ooc1PXXE7TSvvDzUK0KqkQ_2ROFnT40/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLWNv/bmRpdGlvbmFsL2U3/ZDAyMzBjLTkzYTIt/NDg2OS04MTRmLTgw/OWZjOWRlNTlmZC5q/cGc.jpg",
    },
  ],
};

export default state;
