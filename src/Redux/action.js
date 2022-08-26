import axios from "axios";
export const GET_DATA = "GET_DATA";


export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const fetchData = () => (dispatch) => {
  fetch("http://localhost:8080/armoury")
  .then((res)=>res.json())
    .then((data) => {
      console.log(data);
      dispatch(getData(data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const GET_AQUATICS_DATA = "GET_AQUATICS_DATA";

export const getAquaticsData = (payload) => ({
  type: GET_AQUATICS_DATA,
  payload,
});

export const fetchAquaticsData = () => (dispatch) => {
  fetch("http://localhost:8080/aquatics")
  .then((res)=>res.json())
    .then((data) => {
      console.log(data);
      dispatch(getAquaticsData(data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const GET_CYCLING_DATA = "GET_CYCLING_DATA";

export const getCyclingData = (payload) => ({
  type: GET_CYCLING_DATA,
  payload,
});

export const fetchCyclingData = () => (dispatch) => {
  fetch("http://localhost:8080/cycling")
  .then((res)=>res.json())
    .then((data) => {
      console.log(data);
      dispatch(getCyclingData(data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const GET_EQUESTRIAN_DATA = "GET_EQUESTRIAN_DATA";

export const getEquestrianData = (payload) => ({
  type: GET_EQUESTRIAN_DATA,
  payload,
});

export const fetchEquestrianData = () => (dispatch) => {
  fetch("http://localhost:8080/equestrian")
  .then((res)=>res.json())
    .then((data) => {
      console.log(data);
      dispatch(getEquestrianData(data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const GET_EXTREME_DATA = "GET_EXTREME_DATA";

export const getExtremeData = (payload) => ({
  type: GET_EXTREME_DATA,
  payload,
});

export const fetchExtremeData = () => (dispatch) => {
  fetch("http://localhost:8080/extreme")
  .then((res)=>res.json())
    .then((data) => {
      console.log(data);
      dispatch(getExtremeData(data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const GET_GOLF_DATA = "GET_GOLF_DATA";

export const getGolfData = (payload) => ({
  type: GET_GOLF_DATA,
  payload,
});

export const fetchGolfData = () => (dispatch) => {
  fetch("http://localhost:8080/golf")
  .then((res)=>res.json())
    .then((data) => {
      console.log(data);
      dispatch(getGolfData(data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const GET_GYMNASTICS_DATA = "GET_GYMNASTICS_DATA";

export const getGymnasticsfData = (payload) => ({
  type: GET_GYMNASTICS_DATA,
  payload,
});

export const fetchGymnasticsData = () => (dispatch) => {
  fetch("http://localhost:8080/gymnastics")
  .then((res)=>res.json())
    .then((data) => {
      console.log(data);
      dispatch(getGymnasticsfData(data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const GET_LAKEANDSEA_DATA = "GET_LAKEANDSEA_DATA";

export const getLakeandseaData = (payload) => ({
  type: GET_LAKEANDSEA_DATA,
  payload,
});

export const fetchLakeandseaData = () => (dispatch) => {
  fetch("http://localhost:8080/lakeandsea")
  .then((res)=>res.json())
    .then((data) => {
      console.log(data);
      dispatch(getLakeandseaData(data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};
