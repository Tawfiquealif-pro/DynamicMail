// templates.js

const templates = {
    webflowStyle: (data) => `
        <div style="background-color: #f4f4f4; padding: 40px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1a1a1a;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                
                <div style="background-color: #000000; color: #ffffff; padding: 50px 40px;">
                    <h1 style="font-size: 52px; margin: 0; line-height: 0.95; font-weight: 800; letter-spacing: -2px;">
                        Registration.<br>
                        <span style="font-style: italic; font-weight: 400; color: #ffffff;">Next steps.</span>
                    </h1>
                    <p style="margin-top: 30px; font-size: 13px; color: #a1a1a1; text-transform: uppercase; letter-spacing: 1px;">
                        Web Dev Portal '26 • Dhaka & Online
                    </p>
                </div>

                <div style="padding: 50px 40px;">
                    <h2 style="font-size: 36px; margin-bottom: 24px; font-weight: 700; letter-spacing: -1px; color: #000;">We've recived your registration request</h2>
                    
                    <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 20px;">
                        Hi, <strong>${data.name}.</strong> Our manager will soon mail you a confirmation mail once we verify your payment request.Once we do so you'll be notified till then stay tuned!
                        and here are your submited info make sure if its correct. If it has any problem let use know we are here to help .
                    </p>
                    
                    <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin: 30px 0;">
                        <ul style="list-style: none; padding: 0; margin: 0; font-size: 15px;">
                            <li style="margin-bottom: 8px;"><strong>ID:</strong> ${data.id}</li>
                            <li style="margin-bottom: 8px;"><strong>Roll:</strong> ${data.roll}</li>
                            <li style="margin-bottom: 8px;"><strong>Amount:</strong> ${data.paidAmount}</li>
                            <li style="margin-bottom: 8px;"><strong>Payment method:</strong> ${data.paymentMethod}</li>
                            <li style="margin-bottom: 8px;"><strong>Phone:</strong> ${data.phone}</li>

                            <li style="margin-bottom: 0;"><strong>Trnx:</strong> <code style="background: #eee; padding: 2px 4px;">${data.trnxID}</code></li>
                        </ul>
                    </div>

                    <p style="font-size: 15px; color: #666; margin-bottom: 30px;">
                        We are looking forward to welcome you on board. Thank you for persuing intrest in xyz organisetion. Have a great day
                    </p>

                    <a href="https://your-website.com" 
                       style="display: inline-block; background-color: #2d6ff7; color: #ffffff; padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(45, 111, 247, 0.2);">
                       Visit Site
                    </a>

                    <div style="margin-top: 50px; border-top: 1px solid #eee; padding-top: 25px;">
                        <p style="font-size: 14px; font-weight: 700; color: #000; margin-bottom: 4px;">The Management Team</p>
                        <p style="font-size: 12px; color: #999;">Sent to ${data.email}</p>
                    </div>
                </div>
            </div>

            <div style="text-align: center; margin-top: 30px; color: #888;">
                <p style="font-size: 12px;">398 11th Street, San Francisco, CA 94103</p>
                <p style="font-size: 12px;"><a href="#" style="color: #888; text-decoration: underline;">Unsubscribe</a></p>
            </div>
        </div>
    `
};

module.exports = templates;