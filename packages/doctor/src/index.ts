import Scanner from './Scanner';
import { IDoctorOptions } from './types/Doctor';
import { IScanOptions, IScannerReports } from './types/Scanner';

// Ignore directories
const defaultIgnoreDirs = ['build', 'es', 'dist', 'lib', 'node_modules', 'public', 'test', '__tests__'];
// Support file exts
const defaultSupportExts = ['js', 'jsx', 'ts', 'tsx'];

class Doctor {
  public options: any;

  private scanner: any;

  constructor(options: IDoctorOptions) {
    this.options = options || {};
    this.scanner = new Scanner({
      ignoreDirs: defaultIgnoreDirs.concat(this.options.ignoreDirs || []),
      supportExts: defaultSupportExts.concat(this.options.supportExts || []),
    });
  }

  scan(directory: string, options?: IScanOptions): Promise<IScannerReports> {
    return this.scanner.scan(directory, options);
  }
}

export { Doctor };
