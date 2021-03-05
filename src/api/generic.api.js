import axios from "axios";
// api. Проксируется на http://localhost:3001. настройка в vue.config.js и package.json
const API_URL = "/";
let endPoints = [`Email`, `Tel`, `Ip`, `Nickname`, `FullName`];

// делаем запрос к api
const fetchData = (url, method, entity) => {
  // получение данных
  const getData = async (urls) => {
    try {
      const response = await axios[method](`${API_URL}${urls} `);
      // получаем данные
      return {
        success: true,
        data: response.data,
        entity,
      };
    } catch (error) {
      console.log(error);
      // обрабатываем ошибку если запрос не к api не сработал
      return {
        success: false,
        data: undefined,
        entity: {
          ...entity,
          type: `any or ${entity.type}`,
        },
      };
    }
  };
  // проверка на распознание типа сущности
  if (typeof url !== "string") {
    // получаем данные на фсе endpoints
    try {
      return url.map(getData);
    } catch (e) {
      console.log(e);
      throw new Error("This url is not Array or String");
    }
  } else {
    try {
      // получаем данные на конкретный endpoint
      return getData(url);
    } catch (e) {
      console.log(e);
      throw new Error("This url is not Array or String");
    }
  }
};
// запрос на все endpoits
const fetchAllData = (endPoints, method, entity) => {
  return (
    Promise.allSettled(fetchData(endPoints, method, entity))
      .then((res) => {
        return Promise.allSettled(
          res.map((resObj) => {
            return resObj.value.data;
          })
        );
      })
      // получаем данный
      .then((resObjData) => {
        return {
          success: true,
          data: [...new Set([].concat(...resObjData))],
          entity,
        };
      })
      .catch((e) => {
        console.log(e);
      })
  );
};

export const request = async ({ url, method, entity }) => {
  try {
    // если тип сущности известен делаем запрос к api
    if (entity.type !== "any") {
      // url строка
      const response = await fetchData(url, method, entity);

      return response;
    } // если тип сущности не известен делаем запросы все endpoints
    else {
      // endPoints массив всех endpoints
      const result = await fetchAllData(endPoints, method, entity);

      return result;
    }
  } catch (e) {
    console.log(e);
  }
};
