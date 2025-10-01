
<script>
  // No script needed, web components are used directly
</script>

<section>
  <h2>Avatar con immagine</h2>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
    {#each ['xs','sm','md','lg','xl','xxl'] as size}
      <it-avatar type="image" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Luisa Neri" size={size} />
    {/each}
  </div>
</section>
<section>
  <h2>Avatar con testo</h2>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-bottom: 16px;">
    {#each ['xs','sm','md','lg','xl','xxl'] as size}
      <it-avatar type="text" text="Mario Rossi" size={size} />
    {/each}
  </div>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-bottom: 16px;">
    {#each ['xs','sm','md','lg','xl','xxl'] as size}
      <it-avatar type="text" text="Mario Rossi" variant="primary" size={size} />
    {/each}
  </div>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
    {#each ['xs','sm','md','lg','xl','xxl'] as size}
      <it-avatar type="text" text="Mario Rossi" variant="secondary" size={size} />
    {/each}
  </div>
</section>
<section>
  <h2>Avatar con icona</h2>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
    {#each ['xs','sm','md','lg','xl','xxl'] as size}
      <it-avatar type="icon" icon="it-search" avatar-title="Cerca" size={size} />
    {/each}
  </div>
</section>
<section>
  <h2>Avatar come link</h2>
  <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
    <it-avatar type="image" src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri" href="#" avatar-title="Anna Barbieri" />
    <it-avatar type="text" text="Mario Rossi" href="#" avatar-title="Mario Rossi" />
    <it-avatar type="text" text="Mario Rossi" variant="primary" href="#" avatar-title="Mario Rossi" />
    <it-avatar type="icon" icon="it-search" href="#" avatar-title="Cerca" />
  </div>
</section>
<section>
  <h2>Avatar con testo aggiuntivo</h2>
  <div style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;">
    <it-avatar type="image" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo" text="Mario Rossi">
      <div slot="extra-text">
        <h4>Mario Rossi</h4>
        <time>15 SET 2025</time>
      </div>
    </it-avatar>
    <it-avatar type="image" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo" text="Giulia Neri">
      <div slot="extra-text">
        <h4>Giulia Neri</h4>
        <p>LOREM IPSUM DOLOR</p>
      </div>
    </it-avatar>
    <it-avatar type="text" text="Michele Dotti" variant="primary">
      <div slot="extra-text">
        <h4>Michele Dotti</h4>
        <time>12 MAG 2025</time>
      </div>
    </it-avatar>
  </div>
</section>
<section>
  <h2>Avatar presenza utente</h2>
  <div style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; justify-content: center;">
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi" presence="active" size="lg" />
      <div style="margin-top: 8px;"><small>Attivo</small></div>
    </div>
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/women/41.jpg" alt="Luisa Neri" presence="busy" size="lg" />
      <div style="margin-top: 8px;"><small>Non disponibile</small></div>
    </div>
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/men/33.jpg" alt="Gioacchino Romani" presence="hidden" size="lg" />
      <div style="margin-top: 8px;"><small>Invisibile</small></div>
    </div>
  </div>
  <h3>Presenza personalizzata con slot</h3>
  <div style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; justify-content: center;">
    <div style="text-align: center;">
      <it-avatar type="text" text="Marco Bianchi" variant="primary" presence="active" size="lg">
        <span slot="presence" style="position: absolute; bottom: 0; right: 0; background: #28a745; color: white; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid white;">
          <it-icon name="it-check" size="xs" variant="white"></it-icon>
          <span class="visually-hidden">Utente online e disponibile</span>
        </span>
      </it-avatar>
      <div style="margin-top: 8px;"><small>Con icona check</small></div>
    </div>
    <div style="text-align: center; align-items: center; justify-content: center; display: flex;">
      <it-avatar type="text" text="Sara Verdi" variant="secondary" presence="busy" size="lg">
        <span slot="presence" style="position: absolute; bottom: 0; right: 0; background: #dc3545; color: white; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid white; font-size: 10px; font-weight: bold;">
          !<span class="visually-hidden">Utente occupato, non disturbare</span>
        </span>
      </it-avatar>
      <div style="margin-top: 8px;"><small>Con testo custom</small></div>
    </div>
    <div style="text-align: center; display: flex; align-items: center; justify-content: center;">
      <it-avatar src="https://randomuser.me/api/portraits/women/32.jpg" alt="Foto profilo" presence="hidden" size="lg">
        <span slot="presence" style="position: absolute; bottom: 0; right: 0; background: #6c757d; opacity: 0.7; border-radius: 50%; width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; border: 2px solid white;">
          <it-icon name="it-minus" size="xs" variant="white"></it-icon>
          <span class="visually-hidden">Utente invisibile</span>
        </span>
      </it-avatar>
      <div style="margin-top: 8px;"><small>Con icona minus</small></div>
    </div>
  </div>
</section>
<section>
  <h2>Avatar status utente</h2>
  <div style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; justify-content: center;">
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi" status="approved" size="lg" />
      <div style="margin-top: 8px;"><small>Approvato</small></div>
    </div>
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/women/41.jpg" alt="Luisa Neri" status="declined" size="lg" />
      <div style="margin-top: 8px;"><small>Respinto</small></div>
    </div>
    <div style="text-align: center;">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/men/33.jpg" alt="Gioacchino Romani" status="notify" size="lg" />
      <div style="margin-top: 8px;"><small>Notifica</small></div>
    </div>
  </div>
  <h3>Status personalizzato con slot</h3>
  <div style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; justify-content: center;">
    <div style="text-align: center;">
      <it-avatar type="text" text="Luigi Neri" variant="primary" status="approved" size="lg">
        <span slot="status" style="position: absolute; top: -5px; right: -5px; background: #28a745; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border: 2px solid white;">
          <it-icon name="it-check-circle" size="xs" variant="white"></it-icon>
          <span class="visually-hidden">Account verificato e approvato</span>
        </span>
      </it-avatar>
      <div style="margin-top: 8px;"><small>Verificato</small></div>
    </div>
    <div style="text-align: center;">
      <it-avatar type="text" text="Carla Blu" variant="secondary" status="declined" size="lg">
        <span slot="status" style="position: absolute; top: -5px; right: -5px; background: #dc3545; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border: 2px solid white;">
          <it-icon name="it-close" size="xs" variant="white"></it-icon>
          <span class="visually-hidden">Account sospeso o respinto</span>
        </span>
      </it-avatar>
      <div style="margin-top: 8px;"><small>Sospeso</small></div>
    </div>
    <div style="text-align: center;">
      <it-avatar src="https://randomuser.me/api/portraits/men/25.jpg" alt="Foto profilo" status="notify" size="lg">
        <span slot="status" style="position: absolute; top: -5px; right: -5px; background: #17a2b8; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border: 2px solid white; padding: 2px;">
          <span style="width: 8px; height: 8px; background: white; border-radius: 50%; display: inline-block;"></span>
          <span class="visually-hidden">Nuove notifiche disponibili</span>
        </span>
      </it-avatar>
      <div style="margin-top: 8px;"><small>Notifiche</small></div>
    </div>
  </div>
</section>

<!-- Gruppi avatar - Liste verticali -->
<section>
  <h2>Gruppi di avatar - Liste verticali</h2>
  <div style="display: flex; gap: 3rem; flex-wrap: wrap; align-items: center; justify-content: center;">
    <div style="flex: 1; min-width: 300px;">
      <h4>Lista Verticale - Dimensione SM</h4>
      
        <div class="link-list-wrapper">
          <ul class="link-list avatar-group">
            <li>
              <a class="list-item" href="#">
                <it-avatar size="sm" src="https://randomuser.me/api/portraits/men/43.jpg"></it-avatar>
                <span>Mario Rossi</span>
              </a>
            </li>
            <li>
              <a class="list-item" href="#">
                <it-avatar size="sm" src="https://randomuser.me/api/portraits/women/44.jpg"></it-avatar>
                <span>Anna Verdi</span>
              </a>
            </li>
            <li>
              <div class="list-item">
                <it-avatar size="sm" text="Sara Ghione" variant="primary"></it-avatar>
                <span>Sara Ghione</span>
              </div>
            </li>
            <li>
              <div class="list-item">
                <it-avatar size="sm" icon="it-user" avatar-title="Utente generico"></it-avatar>
                <span>Antonio Esposito</span>
              </div>
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
                <it-avatar src="https://randomuser.me/api/portraits/men/32.jpg"></it-avatar>
                <span>Luca Bianchi</span>
              </a>
            </li>
            <li>
              <a class="list-item" href="#">
                <it-avatar src="https://randomuser.me/api/portraits/women/28.jpg"></it-avatar>
                <span>Elena Rossi</span>
              </a>
            </li>
            <li>
              <div class="list-item">
                <it-avatar text="Marco Neri" variant="secondary"></it-avatar>
                <span>Marco Neri</span>
              </div>
            </li>
            <li>
              <div class="list-item">
                <it-avatar icon="it-search" avatar-title="Cerca"></it-avatar>
                <span>Cerca utenti</span>
              </div>
            </li>
          </ul>
        </div>
      
    </div>
  </div>
</section>

<!-- Gruppi avatar - Liste verticali con testo aggiuntivo -->
<section>
  <h2>Gruppi di avatar - Liste verticali con testo aggiuntivo</h2>
  <div style="align-items: center; justify-content: center; display: flex; flex-direction: column;">
    <h4>Lista Team con Ruoli</h4>
    
      <div class="link-list-wrapper">
        <ul class="link-list avatar-group">
          <li>
            <div class="list-item">
              <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo">
                <div slot="extra-text">
                  <h4>Mario Rossi</h4>
                  <p>TEAM LEADER</p>
                </div>
              </it-avatar>
            </div>
          </li>
          <li>
            <div class="list-item">
              <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo">
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

<!-- Gruppi di avatar - Avatar Sovrapposti -->
<section>
  <h2>Gruppi di avatar - Avatar Sovrapposti</h2>
  <div style="display: flex; flex-direction: column; gap: 3rem; align-items: center; justify-content: center;">
    <div style="text-align: center; align-items: center; justify-content: center; display: flex; flex-direction: column;">
      <h4>Avatar Sovrapposti - Dimensione SM</h4>
      
        <div class="link-list-wrapper">
          <ul class="avatar-group-stacked">
            <li>
              <it-avatar size="sm" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo"></it-avatar>
            </li>
            <li>
              <it-avatar size="sm" src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo"></it-avatar>
            </li>
            <li>
              <it-avatar size="sm" src="https://randomuser.me/api/portraits/women/41.jpg" alt="Foto profilo"></it-avatar>
            </li>
            <li>
              <it-avatar size="sm" text="Tommaso Sordi" variant="primary"></it-avatar>
            </li>
            <li>
              <it-avatar size="sm" text="Barbara Tosi" variant="secondary"></it-avatar>
            </li>
            <li>
              <it-avatar type="dropdown" size="sm">
                <it-dropdown label="4+" slot="avatar-dropdown-content" it-aria-label="Altri utenti" variant="secondary">
                  <it-dropdown-item href="#">
                    <it-avatar size="sm" src="https://randomuser.me/api/portraits/men/22.jpg" alt="Foto profilo"></it-avatar>
                    <span>Roberto Milano</span>
                  </it-dropdown-item>
                  <it-dropdown-item href="#">
                    <it-avatar size="sm" text="Giuseppe Verde" variant="primary"></it-avatar>
                    <span>Giuseppe Verde</span>
                  </it-dropdown-item>
                  <it-dropdown-item href="#">
                    <it-avatar size="sm" text="Laura Blu" variant="secondary"></it-avatar>
                    <span>Laura Blu</span>
                  </it-dropdown-item>
                  <it-dropdown-item href="#">
                    <it-avatar size="sm" icon="it-user" avatar-title="Altri utenti"></it-avatar>
                    <span>Altri utenti...</span>
                  </it-dropdown-item>
                </it-dropdown>
              </it-avatar>
            </li>
          </ul>
        </div>
      
      <p style="margin-top: 0.5rem; font-size: 14px; color: #666;">
        <a href="#" style="color: #0066cc; text-decoration: none;">Visualizza altri 8 utenti →</a>
      </p>
    </div>
    <div style="text-align: center; align-items: center; justify-content: center; display: flex; flex-direction: column;">
      <h4>Avatar Sovrapposti - Dimensione MD</h4>
      
        <div class="link-list-wrapper">
          <ul class="avatar-group-stacked">
            <li>
              <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo" href="#"></it-avatar>
            </li>
            <li>
              <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo" href="#"></it-avatar>
            </li>
            <li>
              <it-avatar type="text" text="Giulia Neri" variant="primary" href="#" avatar-title="Giulia Neri" slot="trigger"></it-avatar>
            </li>
            <li>
              <it-avatar text="Sandro Penna" variant="secondary" href="#"></it-avatar>
            </li>
            <li>
              <it-avatar type="dropdown">
                <it-dropdown label="4+" slot="avatar-dropdown-content" it-aria-label="Altri utenti" variant="secondary">
                  <it-dropdown-item href="#">
                    <it-avatar src="https://randomuser.me/api/portraits/men/22.jpg" alt="Foto profilo"></it-avatar>
                    <span>Roberto Milano</span>
                  </it-dropdown-item>
                  <it-dropdown-item href="#">
                    <it-avatar text="Giuseppe Verde" variant="primary"></it-avatar>
                    <span>Giuseppe Verde</span>
                  </it-dropdown-item>
                  <it-dropdown-item href="#">
                    <it-avatar text="Laura Blu" variant="secondary"></it-avatar>
                    <span>Laura Blu</span>
                  </it-dropdown-item>
                  <it-dropdown-item href="#">
                    <it-avatar icon="it-user" avatar-title="Altri utenti"></it-avatar>
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
  </div>
</section>
