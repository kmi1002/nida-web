import api from '@/apis/api';

const AUTH_URL = 'http://52.78.43.106/api/sql_link.php';

export const recommendDomain = (nidaLink: string, userIdx: number) => {
  /*
    Server Language : PHP (생짜)
    Client Language : next.js

    cors 문제 발생
    해결)
    서버쪽 최상단에 header값을 추가
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Max-Age: 86400');
    header('Access-Control-Allow-Headers: x-requested-with');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Content-Type: application/json');

    Client에서 axios.post()로 api를 콜했으나 서버에서 $_POST의 값을 읽어 오지 않는 문제가 발생
    해결)
    api용 경로를 추가함 (그냥 복사)
    http://52.78.43.106/sql/sql_link.php 을
    http://52.78.43.106/api/sql_link.php 로 변경 (sql -> api 경로 변경)
    aqi/sql_lib.php 최단에 코드 추가함
    $_POST = json_decode(file_get_contents("php://input"), true);

    axois.post를 호출했으나 서버 nginx에서 get으로는 정상적이나 post는 options으로 받는 문제 발생
    또한, postman에서 post로 콜했을 때는 데이터를 잘 받아오나, next.js에서 cors 문제가 또 발생
    postman에서 호출한 코드를 next.js에 똑같이 적용해도 cors 문제가 발생
    해결)
    https://stackoverflow.com/questions/25727306/request-header-field-access-control-allow-headers-is-not-allowed-by-access-contr?rq=1
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'로 변경해서 문제없이 해결함.
  */

  const payload = {
    selector: 'check_link',
    link_raw: nidaLink,
    start: 0,
    limit: 10,
    is_order_level: 1,
    user_idx: userIdx,
    is_ajax: true,
  };

  return api.post({
    url: `${AUTH_URL}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    payload,
  });
};

export const insert = (nidaLink: string, targetLink: string, userIdx: number) => {
  const payload = {
    selector: 'insert',
    link_raw: nidaLink,
    link_url: targetLink,
    user_idx: userIdx,
  };

  return api.post({
    url: `${AUTH_URL}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    payload,
  });
};

export const rank = () => {
  const payload = {
    selector: 'select_list',
    rank_type: 'create_today',
    start: 0,
    limit: 100,
  };

  return api.post({
    url: `${AUTH_URL}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    payload,
  });
};
