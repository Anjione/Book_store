import React from 'react';
import './footer.styles.scss';

const Footer = ({ currentUser, hidden }) => (
    <section class="footer">
    <div class="container tex-center">
        <div class="row">
            <div class="col-md-3">
                <h1> HỖ TRỢ KHÁCH HÀNG</h1>
                <p> Hotline chăm sóc khách hàng: 1900-6035 (1000đ/phút , 8-21h kể cả T7, CN)</p>       
                <p> Hỗ trợ khách hàng: hotro@book.vn</p>
                <p>Báo lỗi bảo mật: security@book.vn</p>
            </div>
        </div>
    </div>
</section>
);



export default Footer;