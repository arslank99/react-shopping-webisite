import React, { useEffect, useState } from "react";
import "./Shop.css";
import { productsData } from "../../ShopData";

const List = (props) => {
  const { param, setParams } = props;

  const [filter, setFilter] = useState({
    category: [],
    size: [],
    color: [],
    price: 0,
  });

  const quantities = {};
  let sizes = [];
  let colors = [];

  productsData.forEach((product) => {
    // category quantity and other filter
    product.category.forEach((category) => {
      const categoryName = category.name;
      const categoryCount = quantities[categoryName];

      if (categoryCount) {
        quantities[categoryName] = categoryCount + 1;
      } else {
        quantities[categoryName] = 1;
      }
    });

    // size filter
    product.variants?.forEach((variant) => {
      // Sizes Name
      variant.size.map(({ name }) => {
        sizes.push(name);
      });
      //colors filter
      const color = variant.color_name;
      colors.push(color);
    });
  });

  sizes = [...new Set([...sizes])];
  colors = [...new Set([...colors])];

  // category filer here
  const handleCategory = (categoryValue) => {
    let updatedCategory;
    if (filter.category.includes(categoryValue)) {
      updatedCategory = filter.category.filter((cat) => cat !== categoryValue);
    } else {
      updatedCategory = [...filter.category, categoryValue];
    }
    setFilter({ ...filter, category: updatedCategory });
  };

  // size filter here
  const sizeCategory = (sizeValue) => {
    let updatedSize;
    if (filter.size.includes(sizeValue)) {
      updatedSize = filter.size.filter((size) => size !== sizeValue);
    } else {
      updatedSize = [...filter.size, sizeValue];
    }
    setFilter({ ...filter, size: updatedSize });
  };

  // category color function
  const colorCategory = (colorValue) => {
    let updatedColor;
    if (filter.color.includes(colorValue)) {
      updatedColor = filter.color.filter((color) => color !== colorValue);
    } else {
      updatedColor = [...filter.color, colorValue];
    }
    setFilter({ ...filter, color: updatedColor });
  };

  const priceHandle = (event) => {
    const updatedPrice = parseInt(event.target.value);
    setFilter({ ...filter, price: updatedPrice });
  };

  useEffect(() => {
    setParams({
      category: filter.category.join(","),
      size: filter.size.join(","),
      color: filter.color.join(","),
      price: filter.price.toString(),
    });
  }, [filter]);

  return (
    <>
      <div className="shop-widget">
        <label className="fw-bold">Filters :</label>
        <a className="sidebar-filter-clear" href="">
          Clean All
        </a>
      </div>
      <div className="UpClose">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h6>Categories</h6>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="widget-body pt-0">
                  <div className="filter-items filter-items-count">
                    {Object.entries(quantities).map((item, index) => {
                      const [name, quantity] = item;
                      return (
                        <div
                          className="filter-item"
                          key={index}
                          style={{ cursor: "pointer" }}
                        >
                          <input
                            type="checkbox"
                            name="name"
                            onClick={() => handleCategory(name)}
                          />
                          <label for="">{name}</label>
                          <span>{quantity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <h6>Size</h6>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="filter-items">
                  {sizes?.map((size) => {
                    return (
                      <div className="filter-item" key={size}>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            name="size"
                            id="size-1"
                            onClick={() => sizeCategory(size)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-1"
                          >
                            {size}
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <h6>Colors</h6>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                {colors.map((color, index) => {
                  return (
                    <div
                      className="color"
                      key={index}
                      style={{
                        background: color,
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                      }}
                      onClick={() => colorCategory(color)}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <h6>Price</h6>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="filter-price">
                  <div className="filter-items">
                    <label htmlFor="">Price : ${filter.price}</label>
                    <br />
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={filter.price}
                      onChange={priceHandle}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
