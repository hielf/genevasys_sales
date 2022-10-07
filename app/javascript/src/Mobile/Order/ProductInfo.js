import React, { useState, useEffect } from 'react';
import { apiGet } from '../Functions/ApiRequest'
import { Space } from 'antd-mobile'

const ProductInfo = ({formData, setFormData}) => {

  const [list, setList] = useState({});
  console.log(list);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await apiGet('products', []);
    setList(res);
  };

  return (

      <Space direction='vertical' size='large'>
        {
          Object.keys(list).map(p => {
            if (p == "bundles") {
              return (
                <Space direction='vertical' size='middle' key={ 'space_key_' + p }>
                  <div> { p } </div>
                </Space>
              )
            }
          })
        }
      </Space>

  );
};

export default ProductInfo;
