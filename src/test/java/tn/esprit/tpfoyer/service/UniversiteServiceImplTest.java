package tn.esprit.tpfoyer.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.foyer.Entity.Universite;
import tn.esprit.foyer.Repository.UniversiteRepository;
import tn.esprit.foyer.Service.Impl.UniversiteServiceImpl;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UniversiteServiceImplTest {

    @Mock
    private UniversiteRepository universiteRepository;

    @InjectMocks
    private UniversiteServiceImpl universiteService;

    private Universite universite;

    @BeforeEach
    public void setup() {
        universite = new Universite();

    }

    @Test
    public void testRetrieveUniversite() {
        when(universiteRepository.findById(anyLong())).thenReturn(Optional.of(universite));

        Universite result = universiteService.retrieveUniversity(1L);

        assertNotNull(result);

        verify(universiteRepository, times(1)).findById(1L);
    }

    @Test
    public void testAddUniversite() {
        when(universiteRepository.save(any(Universite.class))).thenReturn(universite);

        Universite result = universiteService.addUniversity(universite);

        assertNotNull(result);
        verify(universiteRepository, times(1)).save(universite);
    }

    @Test
    public void testRemoveUniversite() {
        doNothing().when(universiteRepository).deleteById(anyLong());

        universiteService.removeUniversity(1L);

        verify(universiteRepository, times(1)).deleteById(1L);
    }
}
