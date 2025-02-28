module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      fontSize: {
        10: "10px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
        23: "23px",
        24: "24px",
        36: "36px",
      },
      colors: {
        softblue: "#5194E8",
        navi: "#2A83E9",
        softgray: "#F2F4F7",
        drakblue: "#005284",
      },
      width: {
        90:"90px",
        180:"180px",
        270:"270px",
        360:"360px",
        450:"450px"
      },
      height:{
        90:"90px",
        180:"180px",
        270:"270px",
        360:"360px",
        400:"400px",
        450:"450px"
      }
    },
  },
};
