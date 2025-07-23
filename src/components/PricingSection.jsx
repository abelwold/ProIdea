import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const services = [
  { key: "punchCard", pricePLN: "600 zł", priceEUR: "€139.53" },
  { key: "landingPage", pricePLN: "300 zł", priceEUR: "€69.77" },
  { key: "multiPage", pricePLN: "700 zł", priceEUR: "€162.79" },
  { key: "portfolio", pricePLN: "450 zł", priceEUR: "€104.65" },
  { key: "ecommerce", pricePLN: "1000 zł", priceEUR: "€232.56" },
  { key: "restaurantMenu", pricePLN: "650 zł", priceEUR: "€151.16" },
  { key: "firebaseSetup", pricePLN: "300 zł", priceEUR: "€69.77" },
  { key: "adminDashboard", pricePLN: "800 zł", priceEUR: "€186.05" },
  { key: "pwaOptimization", pricePLN: "250 zł", priceEUR: "€58.14" },
  { key: "seoSetup", pricePLN: "200 zł", priceEUR: "€46.51" },
  { key: "maintenance", pricePLN: "150 zł/mo", priceEUR: "€34.88/mo" },
  { key: "customFeature", pricePLN: "200 zł+", priceEUR: "€46.51+" },
];

export default function PricingPage() {
  const { t, i18n } = useTranslation();
  const isPL = i18n.language === "pl";

  const contactRef = useRef(null);
  const formRef = useRef();

  const [selectedService, setSelectedService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_2ejba7y",
        "template_2qsr6pz",
        formRef.current,
        "-8UEPi65_xh92r1MS"
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setSelectedService("");
        setMessage("");
        setTimeout(() => setStatus(null), 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <section className="px-6 py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">{t("pricing.title")}</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">{t("pricing.subtitle")}</p>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map((service, index) => {
          const title = t(`services.${service.key}.title`);
          return (
            <div
              key={index}
              className="flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {t(`services.${service.key}.desc`)}
              </p>
              <div className="mt-4 font-bold text-indigo-600 dark:text-indigo-400">
                {isPL ? service.pricePLN : service.priceEUR}
              </div>
              <div className="mt-auto pt-4">
                <button
                  onClick={() => {
                    setSelectedService(title);
                    setMessage(t("prefillMessage", { service: title }));
                    contactRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 dark:hover:bg-indigo-500"
                >
                  {t("pricing.button")}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact Form */}
      <div ref={contactRef} className="max-w-4xl mx-auto mt-20">
        <h3 className="text-2xl font-bold mb-4">📬 {t("pricingSections.contact")}</h3>

        {status === "success" && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 border border-green-300 dark:border-green-600 rounded-lg">
            {t("contact.success")}
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 p-4 bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 border border-red-300 dark:border-red-600 rounded-lg">
            {t("contact.error")}
          </div>
        )}
        {status === "loading" && (
          <div className="mb-6 p-4 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 border border-blue-300 dark:border-blue-600 rounded-lg">
            {t("contact.loading")}
          </div>
        )}

        <form ref={formRef} onSubmit={sendEmail} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="user_name"
            type="text"
            placeholder={t("contact.namePlaceholder")}
            required
            className="p-3 border rounded col-span-1 sm:col-span-2 dark:bg-gray-700 dark:text-white"
          />
          <input
            name="user_email"
            type="email"
            placeholder={t("contact.emailPlaceholder")}
            required
            className="p-3 border rounded col-span-1 sm:col-span-2 dark:bg-gray-700 dark:text-white"
          />

          {/* Hidden field that logs the selected service */}
          <input type="hidden" name="requested_service" value={selectedService} />

          <textarea
            name="message"
            placeholder={t("contact.messagePlaceholder")}
            rows="5"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 border rounded col-span-1 sm:col-span-2 dark:bg-gray-700 dark:text-white resize-y"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition col-span-1 sm:col-span-2"
          >
            {t("contact.button")}
          </button>
        </form>
      </div>
    </section>
  );
}
