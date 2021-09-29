// Packages & Frameworks
import styled from "styled-components";

// Files
import thub from "../images/icon-slider.svg";
import check from "../images/icon-check.svg";

// Styles
const Box = styled.article`
  padding: 50px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 5px 10px 75px #8c8a8a29;
  position: relative;

  .info {
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    flex-wrap: wrap;
    align-items: center;

    .text {
      color: #8e909d;
      letter-spacing: 2px;
      font-size: 0.9rem;
      font-weight: 550;
    }

    .price {
      font-size: 2.3rem;
      font-weight: bolder;
      color: #303756;
    }

    .time {
      color: #8e909d;
    }

    @media screen and (max-width: 375px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .text {
        padding-bottom: 10px;
      }
    }
  }

  .range {
    height: 30px;
    padding-bottom: 65px;

    input {
      width: 100%;
      -webkit-appearance: none;
      height: 11px;
      border-radius: 6px;
      background: #f1f1f1;
      outline: none;
      padding: 0;
      margin: 0;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-image: url(${thub});
      background-size: 15px;
      background-repeat: no-repeat;
      background-position: 48% 51%;
      background-color: #0fd9c5;
      margin-top: -1.5px;
      box-shadow: 0 3px 15px #0fd9c5;

      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;
      -webkit-transition: background 0.15s ease-in-out;
      transition: background 0.15s ease-in-out;
    }

    .range__slider [type="range"]::-webkit-slider-thumb:hover {
      background-color: #09f5dd;
    }

    .range__slider [type="range"]::-moz-range-thumb {
      -webkit-appearance: none;
      border: none;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-image: url(${thub});
      background-size: 15px;
      background-repeat: no-repeat;
      background-position: 48% 51%;
      background-color: #0fd9c5;
      margin-top: -1.5px;

      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;
      -webkit-transition: background 0.15s ease-in-out;
      transition: background 0.15s ease-in-out;
    }

    .range__slider [type="range"]::-moz-range-thumb:hover {
      background-color: #f9ca24;
    }

    /* remove border */
    input::-moz-focus-inner,
    input::-moz-focus-outer {
      border: 0;
    }
  }

  .smalls {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 50px;

    .badge {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffebe7;
      color: #e24a1b;
      border-radius: 15px;
      padding: 8px;
    }

    .p-1,
    .p-2 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
    }

    .form-switch {
      input {
        width: 50px;
        height: 25px;
        box-shadow: none;
      }

      input:checked {
        background-color: #0fd9c5;
        border: none;
      }

      input:hover {
        cursor: pointer;
      }
    }

    span {
      color: #9fa5b9;
      margin: 10px 0px;
      padding-right: 15px;
    }

    @media screen and (min-width: 20px) and (max-width: 425px) {
      .p-1,
      .p-2 {
        width: 100%;
      }
    }
  }

  hr {
    content: "";
    position: absolute;
    left: 0;
    transform: translateY(-20px);
    background-color: #9fa5b9;
    height: 1px;
    width: 100%;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 20px;

    ul {
      list-style-type: none;
      list-style-image: url("${check}");
    }

    li {
      list-style: none;
      background-image: url("${check}");
      background-repeat: no-repeat;
      background-position: left center;
      margin: 0;
      padding: 0 0 10px 30px;
      background-size: 13px;
      color: #9fa5b9;
    }

    button {
      width: 200px;
      height: 45px;
      border-radius: 30px;
      color: #fff;
      border: none;
      background-color: #293356;
      font-weight: 500;
    }

    @media screen and (min-width: 20px) and (max-width: 425px) {
      flex-direction: column;
      slign-items: center;

      ul {
        padding-bottom: 10px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 10em;
  }
`;

// JSX
const Card = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <Box className="col-xl-6 col-lg-8 col-md-10 col">
          <div className="info">
            <div className="text">100k PAGEVIEWS</div>
            <div>
              <span className="price">$00.00</span>
              <span className="time">/month</span>
            </div>
          </div>

          <div className="range">
            <div class="form-group range__slider">
              <input type="range" step="1" />
            </div>
          </div>

          <div className="smalls">
            <div className="p-1">
              <span>Monthly Billing</span>
              <div class="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="billing"
                />
              </div>
            </div>
            <div className="p-2">
              <span>Yearly billing</span>
              <span className="badge">25% discount</span>
            </div>
          </div>

          <hr />

          <div className="actions">
            <ul className="list">
              <li>Unlimitid wbsites</li>
              <li>100% data ownershop</li>
              <li>Email reports</li>
            </ul>

            <a href="#">
              <button>Start my troal</button>
            </a>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Card;
