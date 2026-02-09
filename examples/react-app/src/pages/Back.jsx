import React from 'react';

const Back = () => {
  return (
    <>
      <h1>Back</h1>

      <section>
        <h2>Link</h2>
        <a
          href="#"
          className="go-back"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
          <span>Back</span>
        </a>
      </section>

      <section>
        <h2>Pulsanti</h2>
        <it-button
          variant="primary"
          class="go-back"
          icon
          onClick={() => {
            window.history.back();
          }}
        >
          <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
          <span>Back</span>
        </it-button>

        <it-button
          variant="primary"
          class="go-back"
          icon
          onClick={() => {
            window.history.back();
          }}
        >
          <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
          <span>Back</span>
        </it-button>
      </section>
    </>
  );
};

export default Back;
