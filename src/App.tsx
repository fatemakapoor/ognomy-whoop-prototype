import { useCallback, useState } from "react";

type ConnectionState = "disconnected" | "connecting" | "connected";

function WhoopMark() {
  return (
    <div className="whoop-mark" aria-hidden>
      <span className="whoop-mark__w">W</span>
    </div>
  );
}

function BenefitRow({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <li className="benefit">
      <span className="benefit__icon" aria-hidden>
        {icon}
      </span>
      <div>
        <div className="benefit__title">{title}</div>
        <p className="benefit__body">{body}</p>
      </div>
    </li>
  );
}

export function App() {
  const [connection, setConnection] = useState<ConnectionState>("disconnected");
  const [demoConnected, setDemoConnected] = useState(false);

  const effective: ConnectionState = demoConnected ? "connected" : connection;

  const handleConnect = useCallback(() => {
    setDemoConnected(false);
    setConnection("connecting");
    window.setTimeout(() => {
      setConnection("connected");
    }, 1400);
  }, []);

  const handleDisconnect = useCallback(() => {
    setConnection("disconnected");
    setDemoConnected(false);
  }, []);

  return (
    <div className="phone-shell">
      <div className="app-frame">
        <header className="topbar">
          <button type="button" className="icon-btn" aria-label="Back">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 className="topbar__title">Connect a wearable</h1>
          <span className="topbar__spacer" aria-hidden />
        </header>

        <main className="main">
          <section className="hero-card">
            <div className="hero-card__row">
              <div className="brand-lockup">
                <span className="ognomy-badge">Ognomy</span>
                <span className="brand-lockup__plus">+</span>
                <WhoopMark />
              </div>
              <p className="hero-card__lede">
                Share optional recovery and sleep trends from your band so your care team has richer context between
                visits.
              </p>
            </div>
          </section>

          {effective === "connected" ? (
            <section className="panel" aria-live="polite">
              <div className="panel__header">
                <span className="status-pill status-pill--ok">
                  <span className="status-pill__dot" />
                  Connected
                </span>
                <p className="panel__sub">WHOOP account linked</p>
              </div>
              <dl className="meta-list">
                <div className="meta-row">
                  <dt>Account</dt>
                  <dd>j***@email.com</dd>
                </div>
                <div className="meta-row">
                  <dt>Last sync</dt>
                  <dd>Today · 6:42 AM</dd>
                </div>
                <div className="meta-row">
                  <dt>Shared with Ognomy</dt>
                  <dd>Sleep, recovery, workouts, profile</dd>
                </div>
              </dl>
              <p className="fineprint">
                Wearable data supports your care plan but does not replace a home sleep test or in-clinic assessment.
              </p>
              <button type="button" className="btn btn--ghost-danger" onClick={handleDisconnect}>
                Disconnect WHOOP
              </button>
            </section>
          ) : (
            <>
              <section className="panel">
                <h2 className="panel__heading">Why connect</h2>
                <ul className="benefits">
                  <BenefitRow
                    icon="◉"
                    title="Sleep patterns"
                    body="Nightly summaries help your clinician see consistency, time in bed, and recovery alongside your symptoms."
                  />
                  <BenefitRow
                    icon="◇"
                    title="Recovery context"
                    body="Resting heart rate and HRV trends can complement questionnaires—never as a standalone diagnosis."
                  />
                  <BenefitRow
                    icon="◎"
                    title="You stay in control"
                    body="Disconnect anytime. Ognomy only reads the categories you approve during WHOOP sign-in."
                  />
                </ul>
              </section>

              <section className="panel panel--tight">
                <button
                  type="button"
                  className="btn btn--whoop"
                  onClick={handleConnect}
                  disabled={effective === "connecting"}
                >
                  {effective === "connecting" ? (
                    <>
                      <span className="spinner" aria-hidden />
                      Opening WHOOP…
                    </>
                  ) : (
                    "Continue with WHOOP"
                  )}
                </button>
                <p className="legal">
                  By continuing, you authorize Ognomy to access the WHOOP data categories shown in the consent screen.
                  See our{" "}
                  <a href="https://www.ognomy.com" className="link">
                    Notice of Privacy Practices
                  </a>
                  .
                </p>
              </section>
            </>
          )}
        </main>

        <footer className="prototype-bar">
          <label className="proto-toggle">
            <input
              type="checkbox"
              checked={demoConnected}
              onChange={(e) => {
                setDemoConnected(e.target.checked);
                if (e.target.checked) setConnection("disconnected");
              }}
            />
            Prototype: show connected state
          </label>
        </footer>
      </div>
    </div>
  );
}
