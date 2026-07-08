/// <reference types="mocha"/>

import '@italia/notification';
import { expect, fixture, html, aTimeout } from '@open-wc/testing';
import { type ItNotification } from '@italia/notification';

describe('<it-notification>', () => {
  // ---------------------------------------------------------------------------
  // RENDERING - stato di default
  // ---------------------------------------------------------------------------
  describe('rendering - stato di default', () => {
    it('è nascosto per default (isShown=false)', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      expect(el.isShown).to.be.false;
    });

    it('ha fade=true per default', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      expect(el.fade).to.be.true;
    });

    it('ha dismissable=false per default', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      expect(el.dismissable).to.be.false;
    });

    it('ha headingLevel="h2" per default', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      expect(el.headingLevel).to.equal('h2');
    });

    it('ha timeout=3000 per default', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      expect(el.timeout).to.equal(3000);
    });

    it('il container ha role="alert"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container).to.exist;
    });

    it('il container ha aria-labelledby="heading"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      const labelledBy = container?.getAttribute('aria-labelledby');
      expect(labelledBy).to.exist;
      expect(el.shadowRoot?.querySelector(`#${labelledBy}`)).to.exist;
    });

    it('il container ha part="notification"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.getAttribute('part')).to.equal('notification');
    });

    it('ha classe "fade" per default', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.classList.contains('fade')).to.be.true;
    });

    it('non ha classe "show" per default', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.classList.contains('show')).to.be.false;
    });

    it('ha aria-hidden="true" quando non è mostrato', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      await el.updateComplete;
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.getAttribute('aria-hidden')).to.equal('true');
    });

    it('non mostra il pulsante di chiusura per default', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const closeBtn = el.shadowRoot?.querySelector('.notification-close');
      expect(closeBtn).to.not.exist;
    });

    it('mostra il contenuto dello slot "title"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title" id="test-title">Titolo test</span>
        </it-notification>
      `);
      const title = el.querySelector('#test-title');
      expect(title?.textContent).to.equal('Titolo test');
    });

    it('mostra il contenuto dello slot di default', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
          <p id="test-content">Contenuto della notifica</p>
        </it-notification>
      `);
      const content = el.querySelector('#test-content');
      expect(content?.textContent).to.equal('Contenuto della notifica');
    });
  });

  // ---------------------------------------------------------------------------
  // RENDERING - heading-level
  // ---------------------------------------------------------------------------
  describe('rendering - attributo heading-level', () => {
    (['h2', 'h3', 'h4', 'h5', 'h6'] as const).forEach((level) => {
      it(`usa il tag "${level}" quando heading-level="${level}"`, async () => {
        const el = await fixture<ItNotification>(html`
          <it-notification heading-level=${level}>
            <span slot="title">Titolo</span>
          </it-notification>
        `);
        const heading = el.shadowRoot?.querySelector(`${level}[id$="-heading"]`);
        expect(heading).to.exist;
      });
    });

    it('ricade su h2 per heading-level non valido', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification heading-level="h1">
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const heading = el.shadowRoot?.querySelector('h2[id$="-heading"]');
      expect(heading).to.exist;
    });
  });

  // ---------------------------------------------------------------------------
  // RENDERING - attributo status
  // ---------------------------------------------------------------------------
  describe('rendering - attributo status', () => {
    (['success', 'error', 'warning', 'info'] as const).forEach((status) => {
      it(`aggiunge la classe "${status}" quando status="${status}"`, async () => {
        const el = await fixture<ItNotification>(html`
          <it-notification status=${status}>
            <span slot="title">Titolo</span>
          </it-notification>
        `);
        const container = el.shadowRoot?.querySelector('[role="alert"]');
        expect(container?.classList.contains(status)).to.be.true;
      });
    });

    it('non aggiunge classi di status quando status non è impostato', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.classList.contains('success')).to.be.false;
      expect(container?.classList.contains('error')).to.be.false;
      expect(container?.classList.contains('warning')).to.be.false;
      expect(container?.classList.contains('info')).to.be.false;
    });
  });

  // ---------------------------------------------------------------------------
  // RENDERING - attributo icon
  // ---------------------------------------------------------------------------
  describe('rendering - attributo icon', () => {
    it("mostra l'icona quando icon è impostato", async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification icon="it-check-circle">
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const icon = el.shadowRoot?.querySelector('it-icon.icon');
      expect(icon).to.exist;
      expect(icon?.getAttribute('name')).to.equal('it-check-circle');
    });

    it("non mostra l'icona quando icon non è impostato", async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const icon = el.shadowRoot?.querySelector('it-icon.icon');
      expect(icon).to.not.exist;
    });

    it('aggiunge la classe "with-icon" quando icon è impostato', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification icon="it-check-circle">
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.classList.contains('with-icon')).to.be.true;
    });

    it('non aggiunge la classe "with-icon" quando icon non è impostato', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.classList.contains('with-icon')).to.be.false;
    });

    it('imposta color="success" sull\'icona con status="success"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification icon="it-check-circle" status="success">
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const icon = el.shadowRoot?.querySelector('it-icon.icon');
      expect(icon?.getAttribute('color')).to.equal('success');
    });

    it('imposta color="danger" sull\'icona con status="error"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification icon="it-error" status="error">
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const icon = el.shadowRoot?.querySelector('it-icon.icon');
      expect(icon?.getAttribute('color')).to.equal('danger');
    });

    it('imposta color="warning" sull\'icona con status="warning"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification icon="it-warning-circle" status="warning">
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const icon = el.shadowRoot?.querySelector('it-icon.icon');
      expect(icon?.getAttribute('color')).to.equal('warning');
    });

    it('imposta color="primary" sull\'icona con status="info"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification icon="it-info-circle" status="info">
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const icon = el.shadowRoot?.querySelector('it-icon.icon');
      expect(icon?.getAttribute('color')).to.equal('primary');
    });

    it("non imposta color sull'icona senza status", async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification icon="it-info-circle">
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const icon = el.shadowRoot?.querySelector('it-icon.icon');
      expect(icon?.hasAttribute('color')).to.be.false;
    });

    it('imposta align="none" sull\'icona', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification icon="it-check-circle">
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const icon = el.shadowRoot?.querySelector('it-icon.icon');
      expect(icon?.getAttribute('align')).to.equal('none');
    });
  });

  // ---------------------------------------------------------------------------
  // RENDERING - attributo dismissable
  // ---------------------------------------------------------------------------
  describe('rendering - attributo dismissable', () => {
    it('mostra il pulsante di chiusura quando dismissable=true', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification dismissable>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const closeBtn = el.shadowRoot?.querySelector('.notification-close');
      expect(closeBtn).to.exist;
    });

    it('il pulsante di chiusura ha type="button"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification dismissable>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const closeBtn = el.shadowRoot?.querySelector('.notification-close');
      expect(closeBtn?.getAttribute('type')).to.equal('button');
    });

    it('il pulsante di chiusura ha etichetta accessibile "Close notification"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification dismissable>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const label = el.shadowRoot?.querySelector('.notification-close .visually-hidden');
      expect(label?.textContent).to.equal('Close notification');
    });

    it('aggiunge la classe "dismissable" al container', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification dismissable>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.classList.contains('dismissable')).to.be.true;
    });

    it('non aggiunge la classe "dismissable" quando dismissable=false', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.classList.contains('dismissable')).to.be.false;
    });
  });

  // ---------------------------------------------------------------------------
  // RENDERING - attributo fade
  // ---------------------------------------------------------------------------
  describe('rendering - attributo fade', () => {
    it('aggiunge la classe "fade" quando fade=true (default)', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.classList.contains('fade')).to.be.true;
    });

    it('non aggiunge la classe "fade" quando fade=false', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.classList.contains('fade')).to.be.false;
    });
  });

  // ---------------------------------------------------------------------------
  // RENDERING - attributo fix
  // ---------------------------------------------------------------------------
  describe('rendering - attributo fix', () => {
    (['top', 'bottom', 'left', 'right'] as const).forEach((pos) => {
      it(`aggiunge la classe "${pos}-fix" quando fix="${pos}"`, async () => {
        const el = await fixture<ItNotification>(html`
          <it-notification fix=${pos}>
            <span slot="title">Titolo</span>
          </it-notification>
        `);
        const container = el.shadowRoot?.querySelector('[role="alert"]');
        expect(container?.classList.contains(`${pos}-fix`)).to.be.true;
      });
    });

    it('non aggiunge classi *-fix quando fix non è impostato', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      (['top', 'bottom', 'left', 'right'] as const).forEach((pos) => {
        expect(container?.classList.contains(`${pos}-fix`)).to.be.false;
      });
    });
  });

  // ---------------------------------------------------------------------------
  // METODO show()
  // ---------------------------------------------------------------------------
  describe('metodo show()', () => {
    it('imposta isShown=true', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      expect(el.isShown).to.be.false;
      el.show();
      await el.updateComplete;
      expect(el.isShown).to.be.true;
    });

    it('aggiunge la classe "show" al container', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.classList.contains('show')).to.be.true;
    });

    it('imposta display:block sul container', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;
      const container = el.shadowRoot?.querySelector('[role="alert"]') as HTMLElement;
      expect(container?.style.display).to.equal('block');
    });

    it('rimuove aria-hidden dopo show()', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.hasAttribute('aria-hidden')).to.be.false;
    });

    it('non fa nulla se già mostrato', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;
      expect(el.isShown).to.be.true;

      el.show();
      await el.updateComplete;
      expect(el.isShown).to.be.true;
    });

    it('non fa nulla se sta già transitando (isTransitioning=true)', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      // Prima chiamata: fade=true → isTransitioning diventa true
      el.show();
      expect(el.isTransitioning).to.be.true;

      // Seconda chiamata durante transizione: deve essere ignorata
      el.show();
      await el.updateComplete;
      // isShown rimane true (primo show) ma non parte una seconda transizione
      expect(el.isShown).to.be.true;
    });

    it('si nasconde automaticamente dopo il timeout (non dismissable)', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false} .timeout=${100}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;
      expect(el.isShown).to.be.true;

      // timeout (100ms) + margine
      await aTimeout(200);
      expect(el.isShown).to.be.false;
    });

    it('NON si nasconde automaticamente quando dismissable=true', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false} .timeout=${100} dismissable>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;
      expect(el.isShown).to.be.true;

      await aTimeout(250);
      expect(el.isShown).to.be.true;
    });

    it('usa il timeout personalizzato passato come argomento', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false} .timeout=${5000}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      // Timeout predefinito è 5000ms, ma passiamo 100ms come override
      el.show(100);
      await el.updateComplete;
      expect(el.isShown).to.be.true;

      await aTimeout(200);
      expect(el.isShown).to.be.false;
    });

    it('imposta isTransitioning=true durante la transizione (fade=true)', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      expect(el.isTransitioning).to.be.true;

      await aTimeout(200); // attende fine transizione
      expect(el.isTransitioning).to.be.false;
    });

    it('NON imposta isTransitioning quando fade=false', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      expect(el.isTransitioning).to.be.false;
    });
  });

  // ---------------------------------------------------------------------------
  // METODO hide()
  // ---------------------------------------------------------------------------
  describe('metodo hide()', () => {
    it('imposta isShown=false', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;
      expect(el.isShown).to.be.true;

      el.hide();
      await el.updateComplete;
      expect(el.isShown).to.be.false;
    });

    it('rimuove la classe "show" dal container', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;

      el.hide();
      await el.updateComplete;

      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.classList.contains('show')).to.be.false;
    });

    it('imposta display:none sul container (fade=false)', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;

      el.hide();
      await aTimeout(50);

      const container = el.shadowRoot?.querySelector('[role="alert"]') as HTMLElement;
      expect(container?.style.display).to.equal('none');
    });

    it('imposta display:none sul container dopo la transizione (fade=true)', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await aTimeout(200); // attende fine transizione show

      el.hide();
      await aTimeout(250); // attende fine transizione hide (150ms) + margine

      const container = el.shadowRoot?.querySelector('[role="alert"]') as HTMLElement;
      expect(container?.style.display).to.equal('none');
    });

    it('imposta aria-hidden="true" dopo hide()', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;

      el.hide();
      await el.updateComplete;

      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.getAttribute('aria-hidden')).to.equal('true');
    });

    it('non fa nulla se non è mostrato', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      expect(el.isShown).to.be.false;

      el.hide();
      await el.updateComplete;
      expect(el.isShown).to.be.false;
    });

    it('non fa nulla se sta già transitando (isTransitioning=true)', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await aTimeout(200); // attende fine transizione show

      // Prima hide: isShown=false, isTransitioning=true (fade)
      el.hide();
      expect(el.isTransitioning).to.be.true;

      // Seconda hide: deve essere ignorata (isTransitioning=true)
      el.hide();
      await aTimeout(250);

      // container display:none (prima hide completata)
      const container = el.shadowRoot?.querySelector('[role="alert"]') as HTMLElement;
      expect(container?.style.display).to.equal('none');
      expect(el.isTransitioning).to.be.false;
    });

    it('imposta isTransitioning=true durante la transizione (fade=true)', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await aTimeout(200);

      el.hide();
      expect(el.isTransitioning).to.be.true;

      await aTimeout(250);
      expect(el.isTransitioning).to.be.false;
    });

    it('NON imposta isTransitioning quando fade=false', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;

      el.hide();
      expect(el.isTransitioning).to.be.false;
    });
  });

  // ---------------------------------------------------------------------------
  // INTERAZIONE PULSANTE DI CHIUSURA (interno)
  // ---------------------------------------------------------------------------
  describe('interazione pulsante di chiusura (dismissable)', () => {
    it('chiama hide() quando il pulsante di chiusura viene cliccato', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false} dismissable>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;
      expect(el.isShown).to.be.true;

      const closeBtn = el.shadowRoot?.querySelector('.notification-close') as HTMLElement;
      closeBtn?.click();

      await el.updateComplete;
      expect(el.isShown).to.be.false;
    });

    it('imposta display:none dopo click sul pulsante di chiusura (fade=false)', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false} dismissable>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;

      const closeBtn = el.shadowRoot?.querySelector('.notification-close') as HTMLElement;
      closeBtn?.click();

      await aTimeout(50);

      const container = el.shadowRoot?.querySelector('[role="alert"]') as HTMLElement;
      expect(container?.style.display).to.equal('none');
    });

    it('il click sul pulsante di chiusura non causa errori se non è mostrato', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false} dismissable>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      // Non chiamiamo show() — il componente è hidden
      const closeBtn = el.shadowRoot?.querySelector('.notification-close') as HTMLElement;
      closeBtn?.click();

      await el.updateComplete;
      // hide() è no-op se non è mostrato
      expect(el.isShown).to.be.false;
    });

    it("il pulsante di chiusura contiene un'icona it-close", async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification dismissable>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const closeIcon = el.shadowRoot?.querySelector('.notification-close it-icon');
      expect(closeIcon).to.exist;
      expect(closeIcon?.getAttribute('name')).to.equal('it-close');
    });
  });

  // ---------------------------------------------------------------------------
  // ACCESSIBILITÀ
  // ---------------------------------------------------------------------------
  describe('accessibilità', () => {
    it('il container ha role="alert"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.getAttribute('role')).to.equal('alert');
    });

    it('il container ha aria-labelledby="heading"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      const labelledBy = container?.getAttribute('aria-labelledby');
      expect(labelledBy).to.exist;
      expect(el.shadowRoot?.querySelector(`#${labelledBy}`)).to.exist;
    });

    it('aria-hidden="true" quando non è mostrato', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      await el.updateComplete;
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.getAttribute('aria-hidden')).to.equal('true');
    });

    it('aria-hidden assente quando è mostrato', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification .fade=${false}>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      el.show();
      await el.updateComplete;
      const container = el.shadowRoot?.querySelector('[role="alert"]');
      expect(container?.hasAttribute('aria-hidden')).to.be.false;
    });

    it('heading ha id="heading"', async () => {
      const el = await fixture<ItNotification>(html`
        <it-notification>
          <span slot="title">Titolo</span>
        </it-notification>
      `);
      const heading = el.shadowRoot?.querySelector('[id$="-heading"]');
      expect(heading).to.exist;
    });
  });
});
