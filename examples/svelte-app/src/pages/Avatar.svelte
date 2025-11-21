<script>
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

  const imageAvatars = [
    { size: 'xs', src: 'https://randomuser.me/api/portraits/women/44.jpg', alt: 'Luisa Neri' },
    { size: 'sm', src: 'https://randomuser.me/api/portraits/women/44.jpg', alt: 'Luisa Neri' },
    { size: 'md', src: 'https://randomuser.me/api/portraits/men/43.jpg', alt: 'Gioacchino Romani' },
    { size: 'lg', src: 'https://randomuser.me/api/portraits/women/41.jpg', alt: 'Anna Barbieri' },
    { size: 'xl', src: 'https://randomuser.me/api/portraits/men/33.jpg', alt: 'Carlo Poli' },
    { size: 'xxl', src: 'https://randomuser.me/api/portraits/women/90.jpg', alt: 'Giovanna Ferrero' },
  ];
</script>

<!-- Avatar con immagine -->
<section>
  <h2>Avatar con immagine</h2>
  <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap;">
    {#each imageAvatars as avatar}
      <it-avatar type="image" src={avatar.src} alt={avatar.alt} size={avatar.size}></it-avatar>
    {/each}
  </div>
</section>

<!-- Avatar con testo -->
<section>
  <h2>Avatar con testo</h2>
  <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap; margin-bottom: 1rem;">
    {#each sizes as size}
      <it-avatar type="text" text="Mario Rossi" avatar-title="Mario Rossi" size={size}></it-avatar>
    {/each}
  </div>
  <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap; margin-bottom: 1rem;">
    {#each sizes as size}
      <it-avatar type="text" text="Mario Rossi" avatar-title="Mario Rossi" variant="primary" size={size}></it-avatar>
    {/each}
  </div>
  <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap;">
    {#each sizes as size}
      <it-avatar type="text" text="Mario Rossi" variant="secondary" avatar-title="Mario Rossi" size={size}></it-avatar>
    {/each}
  </div>
</section>

<!-- Avatar con icona -->
<section>
  <h2>Avatar con icona</h2>
  <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap;">
    {#each sizes as size}
      <it-avatar type="icon" icon="it-user" avatar-title="Utente" size={size}></it-avatar>
    {/each}
  </div>
</section>

<!-- Avatar come link -->
<section>
  <h2>Avatar come link</h2>
  <div style="display: flex; gap: 1rem; align-items: center; justify-content: center; flex-wrap: wrap;">
    <it-avatar type="image" src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" href="#" avatar-title="Anna Barbieri"></it-avatar>
    <it-avatar type="text" text="Mario Rossi" href="#" avatar-title="Mario Rossi"></it-avatar>
    <it-avatar type="text" text="Mario Rossi" variant="primary" href="#" avatar-title="Mario Rossi"></it-avatar>
    <it-avatar type="icon" icon="it-user" href="#" avatar-title="Utente"></it-avatar>
  </div>
</section>

<!-- Comportamento presenza utente -->
<section>
  <h2>Comportamento presenza utente</h2>
  <div style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; justify-content: center;">
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi" presence="active" size="lg"></it-avatar>
      <div style="margin-top: 0.5rem;"><small>Attivo</small></div>
    </div>
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/women/41.jpg" alt="Luisa Neri" presence="busy" size="lg"></it-avatar>
      <div style="margin-top: 0.5rem;"><small>Non disponibile</small></div>
    </div>
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/men/33.jpg" alt="Gioacchino Romani" presence="hidden" size="lg"></it-avatar>
      <div style="margin-top: 0.5rem;"><small>Invisibile</small></div>
    </div>
  </div>

  <h3>Presenza personalizzata con slot</h3>
  <div style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; justify-content: center;">
    <div style="text-align: center; display: inline-block;">
      <it-avatar type="text" text="Marco Bianchi" avatar-title="Marco Bianchi" variant="primary" presence="active" size="lg">
        <span slot="presence" class="custom-presence custom-presence-success">
          <it-icon name="it-check" size="xs" color="inverse"></it-icon>
          <span class="visually-hidden">Utente online e disponibile</span>
        </span>
      </it-avatar>
      <div style="margin-top: 0.5rem;"><small>Con icona check</small></div>
    </div>
    <div style="text-align: center; display: inline-block;">
      <it-avatar type="text" text="Sara Verdi" avatar-title="Sara Verdi" variant="secondary" presence="busy" size="lg">
        <span slot="presence" class="custom-presence custom-presence-danger">
          !<span class="visually-hidden">Utente occupato, non disturbare</span>
        </span>
      </it-avatar>
      <div style="margin-top: 0.5rem;"><small>Con testo custom</small></div>
    </div>
  </div>
</section>

<!-- Comportamento status utente -->
<section>
  <h2>Comportamento status utente</h2>
  <div style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; justify-content: center;">
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi" status="approved" size="lg"></it-avatar>
      <div style="margin-top: 0.5rem;"><small>Approvato</small></div>
    </div>
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/women/41.jpg" alt="Luisa Neri" status="declined" size="lg"></it-avatar>
      <div style="margin-top: 0.5rem;"><small>Respinto</small></div>
    </div>
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/men/33.jpg" alt="Gioacchino Romani" status="notify" size="lg"></it-avatar>
      <div style="margin-top: 0.5rem;"><small>Notifica</small></div>
    </div>
  </div>

  <h3>Status personalizzato con slot</h3>
  <div style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; justify-content: center;">
    <div style="text-align: center; display: inline-block;">
      <it-avatar type="text" text="Luigi Neri" avatar-title="Luigi Neri" variant="primary" status="approved" size="lg">
        <span slot="status" class="custom-status custom-status-success">
          <it-icon name="it-check-circle" size="xs" color="inverse"></it-icon>
          <span class="visually-hidden">Account verificato e approvato</span>
        </span>
      </it-avatar>
      <div style="margin-top: 0.5rem;"><small>Verificato</small></div>
    </div>
    <div style="text-align: center; display: inline-block;">
      <it-avatar type="text" text="Carla Blu" avatar-title="Carla Blu" variant="secondary" status="declined" size="lg">
        <span slot="status" class="custom-status custom-status-danger">
          <it-icon name="it-close" size="xs" color="inverse"></it-icon>
          <span class="visually-hidden">Account sospeso o respinto</span>
        </span>
      </it-avatar>
      <div style="margin-top: 0.5rem;"><small>Sospeso</small></div>
    </div>
  </div>
</section>

<!-- Gruppi avatar - Liste verticali -->
<section>
  <h2>Gruppi di avatar - Liste verticali</h2>
  <div style="display: flex; gap: 3rem; flex-wrap: wrap; align-items: flex-start; justify-content: center;">
    <div style="flex: 1; min-width: 300px;">
      <h4>Lista Verticale - Dimensione SM</h4>
      <div class="link-list-wrapper">
        <ul class="link-list avatar-group">
          <li>
            <a class="list-item" href="#">
              <it-avatar size="sm" type="image" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi"></it-avatar>
              <span>Mario Rossi</span>
            </a>
          </li>
          <li>
            <a class="list-item" href="#">
              <it-avatar size="sm" type="image" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Anna Verdi"></it-avatar>
              <span>Anna Verdi</span>
            </a>
          </li>
          <li>
            <a class="list-item" href="#">
              <it-avatar size="sm" type="text" text="Sara Ghione" variant="primary"></it-avatar>
              <span>Sara Ghione</span>
            </a>
          </li>
          <li>
            <a class="list-item" href="#">
              <it-avatar size="sm" type="icon" icon="it-user"></it-avatar>
              <span>Antonio Esposito</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div style="flex: 1; min-width: 300px;">
      <h4>Lista Verticale - Dimensione MD</h4>
      <div class="link-list-wrapper">
        <ul class="link-list avatar-group">
          <li>
            <a class="list-item" href="#">
              <it-avatar type="image" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Luca Bianchi"></it-avatar>
              <span>Luca Bianchi</span>
            </a>
          </li>
          <li>
            <a class="list-item" href="#">
              <it-avatar type="image" src="https://randomuser.me/api/portraits/women/28.jpg" alt="Elena Rossi"></it-avatar>
              <span>Elena Rossi</span>
            </a>
          </li>
          <li>
            <a class="list-item" href="#">
              <it-avatar type="text" text="Marco Neri" variant="secondary"></it-avatar>
              <span>Marco Neri</span>
            </a>
          </li>
          <li>
            <a class="list-item" href="#">
              <it-avatar type="icon" icon="it-user"></it-avatar>
              <span>Cerca utenti</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Gruppi di avatar - Avatar Sovrapposti -->
<section>
  <h2>Gruppi di avatar - Avatar Sovrapposti</h2>
  <div style="display: flex; flex-direction: column; gap: 3rem; height: 300px;">
    <div>
      <ul class="avatar-group-stacked">
        <li>
          <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Giorgia Vicari" href="#"></it-avatar>
        </li>
        <li>
          <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Francesco Donati" href="#"></it-avatar>
        </li>
        <li>
          <it-avatar type="text" text="Giulia Neri" variant="primary" href="#" avatar-title="Giulia Neri"></it-avatar>
        </li>
        <li><it-avatar text="Sandro Penna" variant="secondary" avatar-title="Sandro Penna" href="#"></it-avatar></li>
        <li>
          <it-avatar type="dropdown">
            <it-dropdown label="4+" slot="avatar-dropdown-content" it-aria-label="Visualizza altri 4 utenti" variant="secondary">
              <it-dropdown-item href="#">
                <it-avatar src="https://randomuser.me/api/portraits/men/22.jpg"></it-avatar>
                <span>Roberto Milano</span>
              </it-dropdown-item>
              <it-dropdown-item href="#">
                <it-avatar text="Giuseppe Verde" variant="primary" avatar-title="Giuseppe Verde"></it-avatar>
                <span>Giuseppe Verde</span>
              </it-dropdown-item>
              <it-dropdown-item href="#">
                <it-avatar text="Laura Blu" variant="secondary" avatar-title="Laura Blu"></it-avatar>
                <span>Laura Blu</span>
              </it-dropdown-item>
              <it-dropdown-item href="#">
                <it-avatar type="icon" icon="it-user" avatar-title="Altri utenti"></it-avatar>
                <span>Altri utenti...</span>
              </it-dropdown-item>
            </it-dropdown>
          </it-avatar>
        </li>
      </ul>
    </div>
    <p style="margin-top: 0.75rem; font-size: 16px; color: #666;">
      Clicca su "+4" per visualizzare gli utenti rimanenti
    </p>
  </div>
</section>

<!-- Avatar Sovrapposti - Dimensione SM -->
<section>
  <h2>Avatar Sovrapposti - Dimensione SM</h2>
  <div style="display: flex; flex-direction: column; gap: 3rem;">
    <div>
      <ul class="avatar-group-stacked">
        <li>
          <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Giorgia Vicari" size="sm"></it-avatar>
        </li>
        <li>
          <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Francesco Donati" size="sm"></it-avatar>
        </li>
        <li><it-avatar text="Tommaso Sordi" avatar-title="Tommaso Sordi" variant="primary" size="sm"></it-avatar></li>
        <li><it-avatar text="Barbara Tosi" avatar-title="Barbara Tosi" size="sm"></it-avatar></li>
        <li><it-avatar text="Barbara Tosti" avatar-title="Barbara Tosti" variant="secondary" size="sm"></it-avatar></li>
      </ul>
    </div>
  </div>
</section>

<!-- Avatar Sovrapposti - Dimensione MD -->
<section>
  <h2>Avatar Sovrapposti - Dimensione MD</h2>
  <div style="display: flex; flex-direction: column; gap: 3rem;">
    <div>
      <div>
        <ul class="avatar-group-stacked">
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Giorgia Vicari" href="#"></it-avatar>
          </li>
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Francesco Donati" href="#"></it-avatar>
          </li>
          <li>
            <it-avatar type="text" text="Giulia Neri" variant="primary" href="#" avatar-title="Giulia Neri"></it-avatar>
          </li>
          <li><it-avatar text="Sandro Penna" variant="secondary" avatar-title="Sandro Penna" href="#"></it-avatar></li>
          <li><it-avatar text="Sandro Pertini" avatar-title="Sandro Pertini" href="#"></it-avatar></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Avatar con testo aggiuntivo -->
<section>
  <h2>Avatar con testo aggiuntivo</h2>
  <div class="d-flex gap-4">
    <it-avatar type="image" src="https://randomuser.me/api/portraits/men/43.jpg" size="xl">
      <div slot="extra-text" style="justify-content: center; display: flex; flex-direction: column;">
        <h4>Mario Rossi</h4>
        <time>15 SET 2025</time>
      </div>
    </it-avatar>

    <it-avatar type="image" src="https://randomuser.me/api/portraits/women/44.jpg" size="xl">
      <div slot="extra-text" style="justify-content: center; display: flex; flex-direction: column;">
        <h4>Giulia Neri</h4>
        <p>LOREM IPSUM DOLOR</p>
      </div>
    </it-avatar>

    <it-avatar type="text" variant="primary" size="xl" text="Michele Dotti">
      <div slot="extra-text" style="justify-content: center; display: flex; flex-direction: column;">
        <h4>Michele Dotti</h4>
        <time>12 MAG 2025</time>
      </div>
    </it-avatar>
  </div>
</section>

<!-- Gruppi avatar - Liste verticali con testo aggiuntivo -->
<section>
  <h2>Gruppi di avatar - Liste verticali con testo aggiuntivo</h2>
  <div style="max-width: 400px;">
    <h4>Lista Team con Ruoli</h4>
    <div class="link-list-wrapper">
      <ul class="link-list avatar-group">
        <li>
          <div class="list-item">
            <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg">
              <div slot="extra-text">
                <h4>Mario Rossi</h4>
                <p>TEAM LEADER</p>
              </div>
            </it-avatar>
          </div>
        </li>
        <li>
          <div class="list-item">
            <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg">
              <div slot="extra-text">
                <h4>Giulia Neri</h4>
                <p>FRONTEND DEVELOPER</p>
              </div>
            </it-avatar>
          </div>
        </li>
        <li>
          <div class="list-item">
            <it-avatar text="Andrea Bianchi" variant="primary">
              <div slot="extra-text">
                <h4>Andrea Bianchi</h4>
                <p>BACKEND DEVELOPER</p>
              </div>
            </it-avatar>
          </div>
        </li>
        <li>
          <div class="list-item">
            <it-avatar text="Sara Verde" variant="secondary">
              <div slot="extra-text">
                <h4>Sara Verde</h4>
                <time>ULTIMO ACCESSO: 12 SET 2025</time>
              </div>
            </it-avatar>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

<style>
  /* Esempi di classi CSS per personalizzare gli slot presence */
  .custom-presence {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border: 2px solid white;
    border-radius: 50%;
    z-index: 10;
  }

  .custom-presence-success {
    background: #28a745;
    color: white;
  }

  .custom-presence-danger {
    background: #dc3545;
    font-size: 10px;
    font-weight: bold;
    color: white;
  }

  .custom-presence-hidden {
    background: #6c757d;
    opacity: 0.7;
    color: white;
  }

  /* Esempi di classi CSS per personalizzare gli slot status */
  .custom-status {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 24px;
    height: 24px;
    border: 2px solid white;
    border-radius: 50%;
    z-index: 10;
  }

  .custom-status-success {
    background: #28a745;
    color: white;
  }

  .custom-status-danger {
    background: #dc3545;
    color: white;
  }

  .custom-status-info {
    background: #17a2b8;
  }
</style>
