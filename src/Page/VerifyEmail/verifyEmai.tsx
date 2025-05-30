import React, { useState } from 'react';
import '../VerifyEmail/verifyEmai.css';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useVerifyEmail } from '../../hooks/auth/useVerifyEmail';
import { useResendVerifyCode } from '../../hooks/auth/useResendVerifyCode';
import LoadingSpinner from '../../Components/Loading/loading';

export default function VerifyEmail() {
  const { email } = useParams<{ email: string }>();
  const [verifyCode, setVerifyCode] = useState('');

  const {
    handleVerify,
    loading: isVerifying,
    error: verifyError,
    success: verifySuccess,
  } = useVerifyEmail();

  const {
    handleResendCode,
    loading: isResending,
    error: resendError,
    success: resendSuccess,
  } = useResendVerifyCode();

  const onVerifyClick = async () => {
    if (!email) return toast.error('Không tìm thấy email');

    await handleVerify(email, verifyCode);
    if (verifySuccess) {
      toast.success('Xác minh thành công!');
    } else if (verifyError) {
      toast.error(verifyError);
    }
  };

  const onResendClick = async () => {
    if (!email) return toast.error('Không tìm thấy email');

    await handleResendCode(email);
    if (resendSuccess) {
      toast.info('Đã gửi lại mã xác nhận. Vui lòng kiểm tra email của bạn.');
    } else if (resendError) {
      toast.error(resendError);
    }
  };

  return (
    <div className="verify-email-container">
      <div className="verify-email-card">
        <div className="verify-logo">
          <span className="dog-icon">🐕</span>
          <h1><span>Dog</span>Behavior</h1>
        </div>

        <div className="verify-header">
          <div className="verify-icon">
            <span role="img" aria-label="smile">😊</span>
          </div>
          <h2>Xác Minh Tài Khoản</h2>
          <p className="verify-subtitle">Kiểm tra hộp thư đến của bạn</p>
        </div>

        <div className="verify-content">
          <p className="verify-description">
            Mã xác nhận đã được gửi đến
            <span className="verify-email"> {email} </span>
          </p>

          <div className="verify-form">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Nhập mã xác nhận"
                value={verifyCode}
                onChange={(e) => setVerifyCode(e.target.value)}
                autoFocus
              />
            </div>

            <button
              className="verify-button"
              onClick={onVerifyClick}
              disabled={isVerifying}
            >
              {isVerifying ? <LoadingSpinner size={20} /> : 'Xác Nhận'}
            </button>
          </div>

          <div className="verify-help">
            <p>Không nhận được mã?</p>
            <button
              className="resend-button"
              onClick={onResendClick}
              disabled={isResending}
            >
              {isResending ? <LoadingSpinner size={18} /> : 'Gửi lại mã'}
            </button>
          </div>
        </div>

        <div className="verify-footer">
          <div className="verify-note">
            <span className="info-icon">ℹ️</span>
            <p>
              Để sử dụng trang web DogBehavior, bạn cần xác minh tài khoản. Điều này giúp bảo vệ thông tin và tăng cường bảo mật cho tài khoản của bạn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
