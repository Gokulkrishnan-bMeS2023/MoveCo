import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const RecaptchaWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default RecaptchaWrapper;
