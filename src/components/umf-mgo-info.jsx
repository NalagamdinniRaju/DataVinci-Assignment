import { useEffect, useRef } from "react";
import "./umf-mgo-info.css";

export default function UmfMgoInfo({ open, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="umf-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="umf-mgo-title"
    >
      <div className="umf-dialog__backdrop" onClick={onClose} />
      <div ref={ref} className="umf-dialog__panel">
        <div className="umf-dialog__pointer" aria-hidden="true" />
        <div className="umf-dialog__content">
          <section className="umf-dialog__section">
            <h3 id="umf-mgo-title" className="umf-dialog__title">
              UMF
            </h3>
            <p className="umf-dialog__text">
              UMF is the strength and purity rating of Manuka honey. The higher
              the number, the greater the potency and rarity of Manuka honey.
            </p>
            <div className="umf-dialog__scale">
              <Scale
                labels={["10+", "15+", "20+", "24+", "26+", "28+", "30+"]}
                colors={[
                  "#f97316",
                  "#ef4444",
                  "#e11d48",
                  "#8E2C8C",
                  "#0ea5e9",
                  "#22c55e",
                  "#1d4ed8",
                ]}
              />
            </div>
          </section>

          <section className="umf-dialog__section">
            <h3 className="umf-dialog__title">MGO</h3>
            <p className="umf-dialog__text">
              MGO is the key natural compound that gives Manuka honey its
              special antibacterial strength. The higher the number, the higher
              the antibacterial properties in the honey.
            </p>
            <div className="umf-dialog__scale">
              <Scale
                labels={[
                  "263+",
                  "514+",
                  "829+",
                  "1122+",
                  "1282+",
                  "1450+",
                  "1620+",
                ]}
                colors={[
                  "#f97316",
                  "#ef4444",
                  "#e11d48",
                  "#8E2C8C",
                  "#0ea5e9",
                  "#22c55e",
                  "#1d4ed8",
                ]}
              />
            </div>
          </section>

          <div className="umf-dialog__actions">
            <button
              type="button"
              onClick={onClose}
              className="umf-dialog__close"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Scale({ labels, colors }) {
  return (
    <div className="scale">
      <div className="scale__grid">
        {labels.map((l, i) => (
          <div key={l} className="scale__item">
            <span className="scale__label" style={{ color: colors[i] }}>
              {l}
            </span>
            <span
              className="scale__bar"
              style={{ backgroundColor: colors[i] }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
