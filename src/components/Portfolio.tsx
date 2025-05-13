import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { X, Video, ChevronLeft, ChevronRight,  MessageSquare, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  // date: string;
  category: string;
  // likes: number;
  views: number;
  // comments: number;
  coverImage: string;
  media: MediaItem[];
}

const dummyProjects: Project[] = [
  {
    id: "project1",
    title: "Spiti Valley",
    description: "SPITI VALLEY: A journey beyond roads.",
    // date: "2023-12-01",
    category: "Tour",
    // likes: 342,
    views: 5670,
    // comments: 48,
    coverImage: "/Photos/1.jpg",
    media: [
      {
        id: "media1",
        type: "image",
        url: "/Photos/3.jpg",
        title: "Tour",
        description: ""
      },
      {
        id: "media2",
        type: "video",
        url: "/Photos/Videos/2.mp4",
        title: "Car Drive",
        description: ""
      },
      {
        id: "media3",
        type: "image",
        url: "/Photos/4.jpg",
        title: "Vintage Classic",
        description: ""
      },
      {
        id: "media3",
        type: "image",
        url: "/Photos/spiti/2.jpg",
        title: "Vintage Classic",
        description: ""
      }
      ,
      {
        id: "media3",
        type: "image",
        url: "/Photos/spiti/3.jpg",
        title: "Vintage Classic",
        description: ""
      },
      {
        id: "media3",
        type: "image",
        url: "/Photos/spiti/4.jpg",
        title: "Vintage Classic",
        description: ""
      },
      {
        id: "media3",
        type: "image",
        url: "/Photos/spiti/5.jpg",
        title: "Vintage Classic",
        description: ""
      },
      {
        id: "media3",
        type: "image",
        url: "/Photos/spiti/6.jpg",
        title: "Vintage Classic",
        description: ""
      },
      {
        id: "media3",
        type: "image",
        url: "/Photos/spiti/7.jpg",
        title: "Vintage Classic",
        description: ""
      },
      {
        id: "media3",
        type: "image",
        url: "/Photos/spiti/10.jpg",
        title: "Vintage Classic",
        description: ""
      }
    ]
  },
  {
    id: "project2",
    title: "Ladakh",
    description: "Dive into the serene beauty in the land of high mountain passes: LADAKH",
    // date: "2023-11-15",
    category: "Food",
    // likes: 278,
    views: 3890,
    // comments: 32,
    coverImage: "/Photos/5.jpg",
    media: [
      {
        id: "media4",
        type: "image",
        url: "/Photos/6.jpg",
        title: "Gourmet Salad",
        description: ""
      },
      {
        id: "media5",
        type: "video",
        url: "https://player.vimeo.com/external/414980771.hd.mp4?s=9e8040cafb9c8a95968b3462c5f94c4d9748729d&profile_id=175&oauth2_token_id=57447761",
        title: "Coffee Pour",
        description: ""
      },
      {
        id: "media6",
        type: "image",
        url: "/Photos/7.jpg",
        title: "Gourmet Plate",
        description: ""
      }
      ,
      {
        id: "media6",
        type: "image",
        url: "/Photos/Ladakh/1.jpg",
        title: "Gourmet Plate",
        description: ""
      }
      ,
      {
        id: "media6",
        type: "image",
        url: "/Photos/Ladakh/3.jpg",
        title: "Gourmet Plate",
        description: ""
      }
      ,
      {
        id: "media6",
        type: "image",
        url: "/Photos/Ladakh/5.jpg",
        title: "Gourmet Plate",
        description: ""
      }
      ,
      {
        id: "media6",
        type: "image",
        url: "/Photos/Ladakh/7.jpg",
        title: "Gourmet Plate",
        description: ""
      }
      ,
      {
        id: "media6",
        type: "image",
        url: "/Photos/Ladakh/9.jpg",
        title: "Gourmet Plate",
        description: ""
      }
      ,
      {
        id: "media6",
        type: "image",
        url: "/Photos/Ladakh/10.jpg",
        title: "Gourmet Plate",
        description: ""
      }
      ,
      {
        id: "media6",
        type: "image",
        url: "/Photos/Ladakh/13.jpg",
        title: "Gourmet Plate",
        description: ""
      }

    ]
  },
  {
    id: "project3",
    title: "Automobile Shoots",
    description: "BMW 340i",
    // date: "2024-01-10",
    category: "Travel",
    // likes: 421,
    views: 6230,
    // comments: 57,
    coverImage: "/Photos/8.jpg",
    media: [
      {
        id: "media7",
        type: "image",
        url: "/Photos/Automobile_shoot/1.jpg",
        title: "Mountain View",
        description: ""
      },
      {
        id: "media8",
        type: "image",
        url: "/Photos/Automobile_shoot/3.jpg",
        title: "Beach Sunset",
        description: ""
      },
      {
        id: "media9",
        type: "image",
        url: "/Photos/Automobile_shoot/5.jpg",
        title: "Ocean Waves",
        description: ""
      }
      ,
      {
        id: "media9",
        type: "image",
        url: "/Photos/Automobile_shoot/6.jpg",
        title: "Ocean Waves",
        description: ""
      }
      ,
      {
        id: "media9",
        type: "image",
        url: "/Photos/Automobile_shoot/9.jpg",
        title: "Ocean Waves",
        description: ""
      }
      ,
      {
        id: "media9",
        type: "image",
        url: "/Photos/Automobile_shoot/11.jpg",
        title: "Ocean Waves",
        description: ""
      }
    ]
  },
  {
    id: "project4",
    title: "BMW 330i X Tyton PPF",
    description: "BMW 330i M Sport wrapped in TytonPPF. And its the first car in India to have the Blue Stone Moff color shifting Paint Protection Film.",
    // date: "2024-02-15",
    category: "Architecture",
    // likes: 187,
    views: 2950,
    // comments: 29,
    coverImage: "/Photos/9.jpg",
    media: [
      {
        id: "media10",
        type: "image",
        url: "/Photos/330i_ppf/1.jpg",
        title: "Modern Home",
        description: ""
      },
      {
        id: "media11",
        type: "image",
        url: "/Photos/330i_ppf/2.jpg",
        title: "Property Tour",
        description: ""
      },
      {
        id: "media12",
        type: "image",
        url: "/Photos/330i_ppf/3.jpg",
        title: "Interior Design",
        description: ""
      }
    ]
  },
  {
    id: "project5",
    title: "Porsche India",
    description: "Capturing the essence of speed, precision, and elegance with Porsche.",
    // date: "2024-03-05",
    category: "Fashion",
    // likes: 302,
    views: 4870,
    // comments: 42,
    coverImage: "/Photos/10.jpg",
    media: [
      {
        id: "media13",
        type: "image",
        url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
        title: "Fashion Model",
        description: "High fashion editorial photography"
      },
      {
        id: "media14",
        type: "video",
        url: "https://player.vimeo.com/external/567250548.hd.mp4?s=e88fa725ebd66300d7077ed95e6bcb40b69ccbbd&profile_id=175&oauth2_token_id=57447761",
        title: "Fashion Show",
        description: "Behind the scenes of a runway show"
      },
      {
        id: "media15",
        type: "image",
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000",
        title: "Street Style",
        description: "Urban fashion photography"
      }
    ]
  },
{
    id: "project6",
    title: "Classic Vintage Cars",
    description: "Step into the past with my collection of vintage car photos, capturing the timeless beauty and elegance of these automotive treasures found on the streets.",
    date: "2024-03-05",
    category: "Fashion",
    likes: 302,
    views: 4870,
    comments: 42,
    coverImage: "/Photos/11.jpg",
    media: [
      {
        id: "media13",
        type: "image",
        url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
        title: "Fashion Model",
        description: "High fashion editorial photography"
      },
      {
        id: "media14",
        type: "video",
        url: "https://player.vimeo.com/external/567250548.hd.mp4?s=e88fa725ebd66300d7077ed95e6bcb40b69ccbbd&profile_id=175&oauth2_token_id=57447761",
        title: "Fashion Show",
        description: "Behind the scenes of a runway show"
      },
      {
        id: "media15",
        type: "image",
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000",
        title: "Street Style",
        description: "Urban fashion photography"
      }
    ]
  },

  {
    id: "project7",
    title: "Moto-Cross(Car)",
    description: "FMSCI Eastern Nationals Motocross Event",
    date: "2024-03-05",
    category: "Fashion",
    likes: 302,
    views: 4870,
    comments: 42,
    coverImage: "/Photos/12.jpg",
    media: [
      {
        id: "media13",
        type: "image",
        url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
        title: "Fashion Model",
        description: "High fashion editorial photography"
      },
      {
        id: "media14",
        type: "video",
        url: "https://player.vimeo.com/external/567250548.hd.mp4?s=e88fa725ebd66300d7077ed95e6bcb40b69ccbbd&profile_id=175&oauth2_token_id=57447761",
        title: "Fashion Show",
        description: "Behind the scenes of a runway show"
      },
      {
        id: "media15",
        type: "image",
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000",
        title: "Street Style",
        description: "Urban fashion photography"
      }
    ]
  },

  {
    id: "project8",
    title: "Moto-Cross(Bike)",
    description: "FMSCI Motocross National Bike Rall",
    date: "2024-03-05",
    category: "Fashion",
    likes: 302,
    views: 4870,
    comments: 42,
    coverImage: "/Photos/13.jpg",
    media: [
      {
        id: "media13",
        type: "image",
        url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
        title: "Fashion Model",
        description: "High fashion editorial photography"
      },
      {
        id: "media14",
        type: "video",
        url: "https://player.vimeo.com/external/567250548.hd.mp4?s=e88fa725ebd66300d7077ed95e6bcb40b69ccbbd&profile_id=175&oauth2_token_id=57447761",
        title: "Fashion Show",
        description: "Behind the scenes of a runway show"
      },
      {
        id: "media15",
        type: "image",
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000",
        title: "Street Style",
        description: "Urban fashion photography"
      }
    ]
  },



   {
    id: "project8",
    title: "Thar",
    description: "Creative fashion photography and commercial lookbooks",
    date: "2024-03-05",
    category: "Fashion",
    likes: 302,
    views: 4870,
    comments: 42,
    coverImage: "/Photos/14.jpg",
    media: [
      {
        id: "media13",
        type: "image",
        url: "/Photos/15.jpg",
        title: "Fashion Model",
        description: "High fashion editorial photography"
      },
      {
        id: "media14",
        type: "video",
        url: "https://player.vimeo.com/external/567250548.hd.mp4?s=e88fa725ebd66300d7077ed95e6bcb40b69ccbbd&profile_id=175&oauth2_token_id=57447761",
        title: "Fashion Show",
        description: "Behind the scenes of a runway show"
      },
      {
        id: "media15",
        type: "image",
        url: "/Photos/16.jpg",
        title: "Street Style",
        description: "Urban fashion photography"
      }
    ]
  }



];

const Portfolio: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>(dummyProjects);
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(0);
  const [layout, setLayout] = useState<'grid' | 'masonry'>('grid');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    
    // Delay observing project elements to ensure they're rendered
    setTimeout(() => {
      const projectElements = document.querySelectorAll('.project-item');
      projectElements.forEach(element => {
        observer.observe(element);
      });
    }, 100);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      document.querySelectorAll('.project-item').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [projects]);

  const openProject = (project: Project, mediaIndex: number = 0) => {
    setSelectedProject(project);
    setSelectedMediaIndex(mediaIndex);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    
    const totalItems = selectedProject.media.length;
    if (direction === 'prev') {
      setSelectedMediaIndex((prev) => (prev - 1 + totalItems) % totalItems);
    } else {
      setSelectedMediaIndex((prev) => (prev + 1) % totalItems);
    }
  };

  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0 transition-opacity duration-700 ease-in-out" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block mb-4 px-3 py-1 bg-[#ff4c00]/10 border border-[#ff4c00]/30 rounded-full">
            <p className="text-[#ff4c00] text-sm font-medium">Creative Portfolio</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Showcase of Our Work
          </h2>
          <p className="text-gray-700 text-lg">
            Browse through our latest projects across different categories
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff4c00]"></div>
          </div>
        ) : (
          <div className={cn(
            "gap-6",
            layout === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "columns-1 md:columns-2 lg:columns-3 space-y-6"
          )}>
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={cn(
                  "project-item group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-10",
                  layout === 'masonry' ? "break-inside-avoid mb-6" : ""
                )}
                onClick={() => openProject(project)}
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-100">
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Button 
                      variant="outline" 
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 w-full"
                    >
                      View Project
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm py-1 px-2 rounded-full text-xs text-white">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#ff4c00] transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex space-x-4">
                      {/* <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{project.likes}</span>
                      </div> */}
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{project.views}</span>
                      </div>
                      {/* <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{project.comments}</span>
                      </div> */}
                    </div>
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <Dialog open={!!selectedProject} onOpenChange={() => selectedProject && closeProject()}>
          <DialogContent className="max-w-6xl w-full bg-white p-0 border-none">
            <DialogClose className="absolute right-4 top-4 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            
            {selectedProject && (
              <div className="flex flex-col">
                <div className="relative bg-black aspect-video w-full overflow-hidden">
                  {selectedProject.media[selectedMediaIndex].type === "image" ? (
                    <img
                      src={selectedProject.media[selectedMediaIndex].url}
                      alt={selectedProject.media[selectedMediaIndex].title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <video
                      src={selectedProject.media[selectedMediaIndex].url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    ></video>
                  )}
                  
                  {/* Navigation controls */}
                  <Button 
                    variant="outline" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/80 rounded-full p-2 h-auto"
                    onClick={(e) => { e.stopPropagation(); navigateMedia('prev'); }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/80 rounded-full p-2 h-auto"
                    onClick={(e) => { e.stopPropagation(); navigateMedia('next'); }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black mb-2">{selectedProject.title}</h2>
                    <p className="text-gray-700">{selectedProject.media[selectedMediaIndex].description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-1 text-[#ff4c00]" />
                        <span>{selectedProject.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-5 w-5 mr-1 text-gray-500" />
                        <span>{selectedProject.views}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-5 w-5 mr-1 text-gray-500" />
                        <span>{selectedProject.comments}</span>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">{selectedProject.date}</span>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-6 gap-2">
                    {selectedProject.media.map((media, index) => (
                      <div 
                        key={media.id}
                        className={cn(
                          "aspect-square rounded-md overflow-hidden cursor-pointer",
                          selectedMediaIndex === index ? "ring-2 ring-[#ff4c00]" : "opacity-70 hover:opacity-100"
                        )}
                        onClick={(e) => { e.stopPropagation(); setSelectedMediaIndex(index); }}
                      >
                        {media.type === "image" ? (
                          <img 
                            src={media.url} 
                            alt={media.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="relative w-full h-full bg-gray-900">
                            <video 
                              src={media.url}
                              className="w-full h-full object-cover"
                            ></video>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Video className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
