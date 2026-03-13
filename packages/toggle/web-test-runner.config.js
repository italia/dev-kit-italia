import { playwrightLauncher } from '@web/test-runner-playwright';
import { getTestConfig } from '@italia/test-config';

export default getTestConfig({
  browsers: [playwrightLauncher({ product: 'chromium' })],
});
