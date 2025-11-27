// EmailJS Configuration
// Service is connected and ready to use!

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (from Account > API Keys)
  PUBLIC_KEY: '9J3Cj9ClRmjNd1Z3E',
  
  // Your EmailJS Service ID (Gmail service)
  SERVICE_ID: 'service_zclcjzj',
  
  // Your EmailJS Template ID (from Email Templates)
  TEMPLATE_ID: 'template_rj5fksd',
  
  // Recipient email
  TO_EMAIL: '2302137484@qq.com'
};

// Template Variables Mapping:
// When creating your EmailJS template, use these variable names:
// {{from_name}} - 同学姓名 / Student Name
// {{age}} - 同学年龄 / Student Age
// {{country}} - 所在国家 / Country
// {{from_email}} - 电子邮件 / Email
// {{message}} - 咨询说明 / Inquiry Details
// {{source}} - 留言来源 / Message Source
// {{to_email}} - Recipient email (2302137484@qq.com)

// Suggested Email Template Format:
// ------------------------------
// Subject: BEE Beta 新咨询 - {{from_name}}
//
// 您收到一条新的咨询信息：
//
// 【同学姓名】{{from_name}}
// 【同学年龄】{{age}}
// 【所在国家】{{country}}
// 【电子邮件】{{from_email}}
// 【留言来源】{{source}}
//
// 【咨询说明】
// {{message}}
//
// ------------------------------
// 请尽快回复学员！