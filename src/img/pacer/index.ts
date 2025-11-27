// 项目导师照片 - 使用网络链接
// 图片托管在 AWS S3

const BASE_URL = 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer';

// 运营管理
const alanImg = `${BASE_URL}/alan.png`;
const claireImg = `${BASE_URL}/jin.jpg`;

// 项目导师 (Pacer)
const pinImg = `${BASE_URL}/pin.png`;
const hImg = `${BASE_URL}/H.jpg`;
const cImg = `${BASE_URL}/Chi.png`;
const vitoImg = `${BASE_URL}/Vito.jpg`;
const milesImg = `${BASE_URL}/Miles.png`;
const ashlynnImg = `${BASE_URL}/ashlynn.jpg`;
const charlieImg = `${BASE_URL}/charlie.png`;
const bobbyImg = `${BASE_URL}/bobby.png`;
const jinImg = `${BASE_URL}/fangzhong.jpg`;
const mingxiImg = `${BASE_URL}/Mingxi.png`;
const heyangImg = `${BASE_URL}/heyang.jpg`;

// 专家导师 (Pros)
const hugoImg = `${BASE_URL}/yuguo.png`;
const alexwuImg = `${BASE_URL}/alexwu.png`;
const williamImg = `${BASE_URL}/william.jpg`;
const henryImg = `${BASE_URL}/henry.png`;
const royNeeImg = `${BASE_URL}/roynee.png`;

// 导出映射对象
export const pacerImages = {
  // 运营管理
  'ops-alan': alanImg,
  'ops-claire': claireImg,
  
  // 项目导师
  'mentor-pin': pinImg,
  'mentor-h': hImg,
  'mentor-c': cImg,
  'mentor-vito': vitoImg,
  'mentor-miles': milesImg,
  'mentor-ashlynn': ashlynnImg,
  'mentor-charlie': charlieImg,
  'mentor-bobby': bobbyImg,
  'mentor-fangzhong': jinImg,
  'mentor-mingxi': mingxiImg,
  'mentor-heyang': heyangImg,
  
  // 专家导师
  'expert-hugo': hugoImg,
  'expert-alexwu': alexwuImg,
  'expert-william': williamImg,
  'expert-henry': henryImg,
  'expert-roy': royNeeImg,
};

// 默认导出
export default pacerImages;