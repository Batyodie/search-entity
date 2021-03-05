import { request } from "./generic.api";

const getSearch = (entity) => {
  return request({
    url: `${entity.type}`,
    method: "get",
    entity,
  });
};

export { getSearch };
