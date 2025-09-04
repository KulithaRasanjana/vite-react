// src/utils/config.ts

// Define a type for the EmailJS configuration
interface EmailJsConfig {
  serviceID: string;
  templateIDs: string;
  publicKey: string;
}

// Define the overall structure for the AppConfig object
interface AppConfigType {
  recaptchaSiteKey: string;
  recaptchaSecretkey: string;
  emailJsBooking: EmailJsConfig;
  emailJsContact: EmailJsConfig;
}

// Explicitly type the exported object to ensure all properties match the defined structure
export const AppConfig: AppConfigType = {
  // Google reCAPTCHA Site Key (public, safe to be in client-side config)
  recaptchaSiteKey: '6Ld0dL0rAAAAAIN2oAJlalytgvD2f03ML-XYrJBv',
  recaptchaSecretkey: '6Ld0dL0rAAAAAC30mvLzx12rgXCv6sSslfVY5bID',

  // EmailJS IDs (public keys/IDs, safe to be in client-side config) 
  emailJsBooking: {
    serviceID: 'service_xo2yww5',
    templateIDs: 'template_dzi806o',
    publicKey: 'prUiIJgXLNPQjCyQ3',
  },
  emailJsContact: {
    serviceID: 'service_krv9hom',
    templateIDs: 'template_czu0rk5',
    publicKey: '9PeI-0VKQPROjOqV9',
  },
};