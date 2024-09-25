import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'appSearchScreen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-screen.component.html',
  styleUrl: './search-screen.component.scss',
})
export class SearchScreenComponent implements OnInit, OnDestroy {
  searchInput$ = new Subject<string>();
  loading$ = new BehaviorSubject<boolean>(false);
  searchedData: string = '';

  onSearchInputChange($event: Event) {
    const searchInputValue = ($event.target as HTMLInputElement).value;
    this.searchInput$.next(searchInputValue);
    this.loading$.next(true);
  }

  getLoading(): Observable<boolean> {
    return this.loading$;
  }

  ngOnInit(): void {
    this.searchInput$
      .pipe(
        debounceTime(3000),
        distinctUntilChanged((prev: string, curr: string) => {
          if (prev === curr) {
            this.loading$.next(false);
            return true;
          } else {
            return false;
          }
        })
      )
      .subscribe({
        next: (searchTerm: string) => {
          this.searchedData = searchTerm;
          this.loading$.next(false);
          // make an API call here.
        },
        error: (error: Error) => {
          console.log('error: ', error);
        },
        complete: () => {
          this.loading$.next(false);
        },
      });
  }

  ngOnDestroy(): void {
    this.searchInput$.complete();
  }
}
